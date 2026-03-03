/**
 * Form validation logic extracted from the monolithic script.
 *
 * Handles per-section validation, inline error display, and
 * full-form issue collection for the review modal.
 */

import type { Lang, LangDict } from "../../data/registration/i18n";
import { showToast } from "./toast";

export class FormValidator {
  constructor(
    private getLang: () => Lang,
    private dict: LangDict
  ) {}

  private get lang() {
    return this.getLang();
  }
  private get d() {
    return this.dict[this.lang];
  }

  // ── Inline error helpers ─────────────────────────────────────────────────
  private showFieldError(el: HTMLElement, msg: string) {
    el.style.borderColor = "#e74c3c";
    el.style.boxShadow = "0 0 0 3px rgba(231,76,60,0.18)";
    el.parentNode?.querySelector(".field-error-msg")?.remove();
    const span = document.createElement("span");
    span.className = "field-error-msg";
    span.textContent = msg;
    span.setAttribute("role", "alert");
    el.insertAdjacentElement("afterend", span);
  }

  private clearFieldError(el: HTMLElement) {
    el.style.borderColor = "";
    el.style.boxShadow = "";
    el.parentNode?.querySelector(".field-error-msg")?.remove();
  }

  private showGroupError(container: Element, msg: string) {
    container.querySelector(".checkbox-group-error")?.remove();
    const div = document.createElement("div");
    div.className = "checkbox-group-error";
    div.textContent = msg;
    div.setAttribute("role", "alert");
    container.appendChild(div);
  }

  private clearGroupError(container: Element | null) {
    container?.querySelector(".checkbox-group-error")?.remove();
  }

  private requiredMsg(label?: string): string {
    const isEN = this.lang === "en";
    if (label) return isEN ? `${label} is required` : `${label} wajib diisi`;
    return isEN ? "This field is required" : "Field ini wajib diisi";
  }

  private getLabelText(field: HTMLElement, section: Element): string {
    let lbl: HTMLLabelElement | null = null;
    if (field.id) lbl = section.querySelector(`label[for="${field.id}"]`);
    if (!lbl) {
      const fg = field.closest(".form-group");
      if (fg) lbl = fg.querySelector("label");
    }
    return lbl?.textContent?.replace(/\*/g, "").trim() || "";
  }

  // ── Per-section validation ───────────────────────────────────────────────
  validateCurrentSection(sectionNum: number): boolean {
    const section = document.querySelector(`.form-section[data-section="${sectionNum}"]`);
    if (!section) return true;

    const requiredFields = section.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
      '[required]:not([type="checkbox"]):not([type="radio"]):not([type="file"])'
    );
    const requiredGroupNames = new Set(
      Array.from(section.querySelectorAll<HTMLInputElement>('[required][type="radio"], [required][type="checkbox"]'))
        .map((f) => f.name)
    );

    const t = this.d.toast;
    let isValid = true;
    let firstErrorMsg = "";

    // 1. Text/select required fields
    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        const label = this.getLabelText(field, section);
        this.showFieldError(field, this.requiredMsg(label));
        isValid = false;
      } else {
        this.clearFieldError(field);
      }
    });

    // 2. Radio/checkbox groups
    requiredGroupNames.forEach((name) => {
      const group = section.querySelectorAll<HTMLInputElement>(`[name="${name}"]`);
      const container = group[0]?.closest(".radio-group, .checkbox-group, .form-group");
      const checked = Array.from(group).some((f) => f.checked);
      if (!checked) {
        group.forEach((f) => {
          f.style.accentColor = "#e74c3c";
          f.style.outline = "1px solid #e74c3c";
        });
        if (container) {
          this.showGroupError(container, this.lang === "en" ? "Please select one option" : "Pilih salah satu pilihan");
        }
        isValid = false;
      } else {
        group.forEach((f) => {
          f.style.accentColor = "#145DA0";
          f.style.outline = "";
        });
        if (container) this.clearGroupError(container);
      }
    });

    // 3. Section-specific rules
    if (sectionNum === 1) {
      isValid = this.validateSection1(section, isValid) && isValid;
    }
    if (sectionNum === 3) {
      isValid = this.validateSection3(section, isValid) && isValid;
    }
    if (sectionNum === 6) {
      isValid = this.validateSection6(section, isValid) && isValid;
    }

    // Toast
    if (!isValid) {
      if (!firstErrorMsg) {
        firstErrorMsg = t.validationMissing;
      }
      showToast(firstErrorMsg, "error");
    }

    return isValid;
  }

  private validateSection1(section: Element, _valid: boolean): boolean {
    let ok = true;
    const emailField = section.querySelector<HTMLInputElement>('input[name="email"]');
    if (emailField?.value.trim()) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim())) {
        const msg = this.lang === "en"
          ? "Invalid email format (example: name@domain.com)"
          : "Format email tidak valid (contoh: nama@domain.com)";
        this.showFieldError(emailField, msg);
        ok = false;
      }
    }
    const phoneField = section.querySelector<HTMLInputElement>('input[name="no_hp"]');
    if (phoneField?.value.trim()) {
      const stripped = phoneField.value.trim().replace(/[\s+\-]/g, "");
      if (!/^\d{9,15}$/.test(stripped)) {
        const msg = this.lang === "en"
          ? "WhatsApp number: 9–15 digits only (example: 628123456789)"
          : "No. WhatsApp harus 9–15 digit angka (contoh: 628123456789)";
        this.showFieldError(phoneField, msg);
        ok = false;
      }
    }
    return ok;
  }

  private validateSection3(section: Element, _valid: boolean): boolean {
    let ok = true;
    const tujuanCbs = section.querySelectorAll<HTMLInputElement>('input[name="tujuan"]');
    const container = tujuanCbs[0]?.closest(".checkbox-group, .form-group");
    if (!Array.from(tujuanCbs).some((cb) => cb.checked)) {
      tujuanCbs.forEach((cb) => {
        cb.style.accentColor = "#e74c3c";
        cb.style.outline = "1px solid #e74c3c";
      });
      if (container) {
        this.showGroupError(
          container,
          this.lang === "en"
            ? "Please select at least one main purpose"
            : "Pilih minimal satu Tujuan Utama Mengambil Kursus"
        );
      }
      ok = false;
    } else {
      tujuanCbs.forEach((cb) => {
        cb.style.accentColor = "#145DA0";
        cb.style.outline = "";
      });
      if (container) this.clearGroupError(container);
    }

    const skorField = section.querySelector<HTMLInputElement>('input[name="skor_awal"]');
    if (skorField?.value.trim()) {
      const val = parseFloat(skorField.value);
      if (isNaN(val) || val < 0) {
        this.showFieldError(
          skorField,
          this.lang === "en"
            ? "Initial score must be a valid number (e.g. 6.5 or 85)"
            : "Skor awal harus berupa angka yang valid (contoh: 6.5 atau 85)"
        );
        ok = false;
      } else {
        this.clearFieldError(skorField);
      }
    }
    return ok;
  }

  private validateSection6(section: Element, _valid: boolean): boolean {
    let ok = true;
    const t = this.d.toast;
    const pwField = section.querySelector<HTMLInputElement>('input[name="lms_password"]');
    const pwConfirm = section.querySelector<HTMLInputElement>('input[name="lms_password_confirm"]');

    if (pwField?.value && pwField.value.length < 8) {
      this.showFieldError(pwField, t.passwordTooShort);
      ok = false;
    } else if (pwField?.value && pwConfirm?.value && pwField.value !== pwConfirm.value) {
      this.showFieldError(pwConfirm, t.passwordMismatch);
      ok = false;
    } else if (pwConfirm) {
      this.clearFieldError(pwConfirm);
    }

    // File upload
    const fileInput = document.getElementById("bukti_pembayaran") as HTMLInputElement | null;
    const dropzone = document.getElementById("dropzone");
    const dropzoneErr = document.getElementById("bukti_error");
    if (!fileInput?.files?.length) {
      if (dropzone) {
        dropzone.style.border = "2px dashed #e74c3c";
        dropzone.style.boxShadow = "0 0 0 3px rgba(231,76,60,0.18)";
      }
      if (dropzoneErr) {
        dropzoneErr.innerHTML = `<strong>⚠</strong> ${this.d.dropzoneError}`;
        dropzoneErr.style.display = "block";
      }
      ok = false;
    } else {
      if (dropzone) {
        dropzone.style.border = "";
        dropzone.style.boxShadow = "";
      }
      if (dropzoneErr) dropzoneErr.style.display = "none";
    }
    return ok;
  }

  // ── Full-form issue collection (for review modal) ────────────────────────
  collectAllIssues(formData: FormData): Array<{ label: string; detail: string }> {
    const isEN = this.lang === "en";
    const issues: Array<{ label: string; detail: string }> = [];
    const req = this.d.review.required;

    const reqMap: Array<{ field: string; label: string }> = [
      { field: "nama", label: isEN ? "Full Name" : "Nama Lengkap" },
      { field: "email", label: isEN ? "Email" : "Email Aktif" },
      { field: "no_hp", label: isEN ? "WhatsApp Number" : "No. WhatsApp" },
      { field: "jenis_kelamin", label: isEN ? "Gender" : "Jenis Kelamin" },
      { field: "negara", label: isEN ? "Country" : "Negara" },
      { field: "tanggal_lahir", label: isEN ? "Date of Birth" : "Tanggal Lahir" },
      { field: "alamat", label: isEN ? "Full Address" : "Alamat Lengkap" },
      { field: "nama_kontak_darurat", label: isEN ? "Emergency Contact Name" : "Nama Kontak Darurat" },
      { field: "kontak_darurat", label: isEN ? "Emergency Contact No." : "No. Kontak Darurat" },
      { field: "status", label: isEN ? "Current Status" : "Status Saat Ini" },
      { field: "level", label: isEN ? "Last Education" : "Pendidikan Terakhir" },
      { field: "program", label: isEN ? "Test Program" : "Program Tes" },
      { field: "jadwal", label: isEN ? "Class Preference" : "Preferensi Kelas" },
      { field: "program_intensif", label: isEN ? "Intensive Program" : "Program Intensif" },
      { field: "lms_username", label: "LMS Username" },
      { field: "lms_password", label: "LMS Password" },
      { field: "lms_password_confirm", label: isEN ? "Confirm Password" : "Konfirmasi Password" },
    ];

    for (const { field, label } of reqMap) {
      if (!(formData.get(field) as string || "").trim()) {
        issues.push({ label, detail: req });
      }
    }

    const email = (formData.get("email") as string || "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      issues.push({
        label: isEN ? "Email" : "Email Aktif",
        detail: isEN ? "Invalid email format." : "Format email tidak valid.",
      });
    }

    const phone = (formData.get("no_hp") as string || "").trim().replace(/[\s+\-]/g, "");
    if (phone && !/^\d{9,15}$/.test(phone)) {
      issues.push({
        label: isEN ? "WhatsApp Number" : "No. WhatsApp",
        detail: isEN ? "Must be 9–15 digits." : "Harus 9–15 digit angka.",
      });
    }

    if (!formData.getAll("tujuan").length) {
      issues.push({
        label: isEN ? "Main Purpose" : "Tujuan Utama",
        detail: isEN ? "At least one option must be selected." : "Minimal satu tujuan harus dipilih.",
      });
    }

    const pwd = formData.get("lms_password") as string || "";
    const pwdC = formData.get("lms_password_confirm") as string || "";
    if (pwd && pwd.length < 8) {
      issues.push({ label: "LMS Password", detail: isEN ? "Must be at least 8 characters." : "Minimal 8 karakter." });
    }
    if (pwd && pwdC && pwd !== pwdC) {
      issues.push({
        label: isEN ? "Confirm Password" : "Konfirmasi Password",
        detail: isEN ? "Does not match password." : "Tidak sama dengan password.",
      });
    }

    const fileInput = document.getElementById("bukti_pembayaran") as HTMLInputElement | null;
    if (!fileInput?.files?.length) {
      issues.push({
        label: isEN ? "Payment Proof" : "Bukti Pembayaran",
        detail: isEN ? "File must be uploaded." : "File wajib diunggah.",
      });
    }

    if ((formData.get("negara") || "") === "Indonesia") {
      const regionFields: Array<[string, string]> = [
        ["provinsi", isEN ? "Province" : "Provinsi"],
        ["kota", isEN ? "City" : "Kabupaten/Kota"],
        ["kecamatan", isEN ? "Subdistrict" : "Kecamatan"],
        ["kelurahan", isEN ? "Village" : "Kelurahan/Desa"],
      ];
      for (const [f, l] of regionFields) {
        if (!(formData.get(f) as string || "").trim()) {
          issues.push({ label: l, detail: req });
        }
      }
    }

    return issues;
  }
}
