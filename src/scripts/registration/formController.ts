/**
 * Registration form – client-side entry point.
 *
 * Replaces the monolithic <script is:inline> block. This file is imported by
 * Astro's Vite bundler so it benefits from tree-shaking, code-splitting,
 * and proper source-maps.
 */

import { langDict, type Lang } from "../../data/registration/i18n";
import { TOP_UNIVERSITIES, PROVINCE_FALLBACK, PROGRAM_LEVELS } from "../../data/registration/constants";
import { RegionService } from "./regionService";
import { FormValidator } from "./formValidator";
import { showToast } from "./toast";

// ── State ────────────────────────────────────────────────────────────────────
let currentLang: Lang = "id";
let currentSection = 1;
const TOTAL_SECTIONS = 6;

const $ = <T extends HTMLElement>(sel: string) => document.querySelector<T>(sel)!;
const $$ = (sel: string) => document.querySelectorAll(sel);

// ── Cached DOM refs (fail-fast if page structure changes) ────────────────────
const form = $<HTMLFormElement>("#studentForm");
const messageEl = $<HTMLDivElement>("#message");
const loadingEl = $<HTMLDivElement>("#loading");
const btnNext = $<HTMLButtonElement>("#btnNext");
const btnPrev = $<HTMLButtonElement>("#btnPrev");
const btnSubmit = $<HTMLButtonElement>("#btnSubmit");

// Region selects
const negaraSelect = $<HTMLSelectElement>("#negara_select");
const provinsiSelect = $<HTMLSelectElement>("#provinsi_select");
const kotaSelect = $<HTMLSelectElement>("#kota_select");
const kecamatanSelect = $<HTMLSelectElement>("#kecamatan_select");
const kelurahanSelect = $<HTMLSelectElement>("#kelurahan_select");

// Study destination selects
const negaraStudiSelect = $<HTMLSelectElement>("#negara_studi_select");
const negaraStudiOther = $<HTMLInputElement>("#negara_studi_other");
const negaraStudiInput = $<HTMLInputElement>("#negara_studi_input");
const universitasSelect = $<HTMLSelectElement>("#universitas_select");
const universitasOther = $<HTMLInputElement>("#universitas_target_other");
const universitasInput = $<HTMLInputElement>("#universitas_target_input");

// Review modal
const reviewModal = $<HTMLDivElement>("#review-modal");
const reviewModalBody = $<HTMLDivElement>("#review-modal-body");
const reviewModalHdr = $<HTMLDivElement>("#review-modal-header");
const reviewModalTitle = $<HTMLHeadingElement>("#review-modal-title");
const reviewBtnFix = $<HTMLButtonElement>("#review-modal-fix");
const reviewBtnConfirm = $<HTMLButtonElement>("#review-modal-confirm");

// Services
const regionService = new RegionService();
const validator = new FormValidator(() => currentLang, langDict);

// ── Language switcher ────────────────────────────────────────────────────────
export function setLanguage(lang: Lang) {
  currentLang = lang;
  const d = langDict[lang];

  // Title & progress
  $("#form-title").textContent = d.formTitle;
  $$(".section-title").forEach((el, i) => {
    el.textContent = d.sectionTitles[i] ?? el.textContent;
  });
  $$(".progress-label").forEach((el, i) => {
    el.textContent = d.progress[i] ?? el.textContent;
  });

  // Buttons
  btnPrev.textContent = d.btnPrev;
  btnNext.textContent = d.btnNext;
  btnSubmit.textContent = d.btnSubmit;

  // Dropzone text
  const dropStrong = $("#dropzone_strong");
  if (dropStrong) dropStrong.textContent = d.dropzoneText;
  const dropOr = $("#dropzone_or");
  if (dropOr) dropOr.textContent = d.dropzoneOr;
  const chooseFileBtn = $<HTMLButtonElement>("#chooseFileBtn");
  if (chooseFileBtn) chooseFileBtn.textContent = d.chooseFile;
  const dropHint = $(".dropzone-hint");
  if (dropHint) dropHint.textContent = d.fileHint;

  // Password help
  const pwHelp = $("#password_help");
  if (pwHelp) pwHelp.textContent = d.passwordHelpWeak;

  // Preview / Remove buttons
  const previewBtn = $("#preview_bukti_btn");
  const removeBtn = $("#remove_bukti_btn");
  if (previewBtn) previewBtn.textContent = d.fileView;
  if (removeBtn) removeBtn.textContent = d.fileRemove;

  // Field labels (preserve * span)
  const fieldMap = d.fields;
  Object.entries(fieldMap.labels).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = text.replace("*", ' <span class="required">*</span>');
  });

  // Placeholders
  Object.entries(fieldMap.placeholders).forEach(([id, text]) => {
    const el = document.getElementById(id) as HTMLInputElement | null;
    if (el) el.placeholder = text;
  });

  // Help texts
  Object.entries(fieldMap.helps).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });

  // Select options (translate visible text, preserve values)
  Object.entries(fieldMap.options).forEach(([selectId, opts]) => {
    const select = document.getElementById(selectId) as HTMLSelectElement | null;
    if (select) {
      Array.from(select.options).forEach((opt, i) => {
        if (opts[i]) opt.textContent = opts[i];
      });
    }
  });

  // Refresh study country/university selects
  seedStudyCountrySelect();
  if (negaraStudiSelect.value) {
    negaraStudiSelect.dispatchEvent(new Event("change"));
  }
}

// ── Helper to get i18n option label ──────────────────────────────────────────
function optLabel(key: string, index = 0): string {
  return langDict[currentLang]?.fields?.options?.[key]?.[index] ?? "";
}

// ── Select helpers ───────────────────────────────────────────────────────────
function setSelectOptions(
  selectEl: HTMLSelectElement,
  items: Array<{ id?: string; name?: string; value?: string; code?: string; kode?: string; label?: string }>,
  placeholder: string
) {
  selectEl.innerHTML = `<option value="">${placeholder}</option>`;
  for (const item of items) {
    const opt = document.createElement("option");
    opt.value = item.id || item.value || item.code || item.kode || item.name || "";
    opt.textContent = item.name || item.label || opt.value;
    opt.dataset.name = item.name || opt.textContent;
    opt.dataset.id = item.id || opt.value;
    selectEl.appendChild(opt);
  }
}

function setSimpleOptions(
  selectEl: HTMLSelectElement,
  items: string[],
  placeholder: string
) {
  selectEl.innerHTML = `<option value="">${placeholder}</option>`;
  for (const name of items) {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    selectEl.appendChild(opt);
  }
  const otherOpt = document.createElement("option");
  otherOpt.value = "other";
  otherOpt.textContent = langDict[currentLang].otherOption;
  selectEl.appendChild(otherOpt);
}

function resetBelow(level?: "provinsi" | "kota" | "kecamatan") {
  if (!level || level === "provinsi") {
    setSelectOptions(kotaSelect, [], optLabel("kota_select") || "-- Pilih Kabupaten/Kota --");
    setSelectOptions(kecamatanSelect, [], optLabel("kecamatan_select") || "-- Pilih Kecamatan --");
    setSelectOptions(kelurahanSelect, [], optLabel("kelurahan_select") || "-- Pilih Kelurahan/Desa --");
  }
  if (level === "kota") {
    setSelectOptions(kecamatanSelect, [], optLabel("kecamatan_select") || "-- Pilih Kecamatan --");
    setSelectOptions(kelurahanSelect, [], optLabel("kelurahan_select") || "-- Pilih Kelurahan/Desa --");
  }
  if (level === "kecamatan") {
    setSelectOptions(kelurahanSelect, [], optLabel("kelurahan_select") || "-- Pilih Kelurahan/Desa --");
  }
}

// ── Indonesia region cascade ─────────────────────────────────────────────────
async function seedProvinces() {
  // Show fallback instantly
  setSelectOptions(provinsiSelect, PROVINCE_FALLBACK, optLabel("provinsi_select") || "-- Pilih Provinsi --");
  try {
    const data = await regionService.getProvinces();
    if (data.length) {
      setSelectOptions(provinsiSelect, data, optLabel("provinsi_select") || "-- Pilih Provinsi --");
    }
  } catch {
    // fallback already shown
  }
}

function toggleIndonesiaFields() {
  const show = negaraSelect.value === "Indonesia";
  [provinsiSelect, kotaSelect, kecamatanSelect, kelurahanSelect].forEach((el) => {
    el.closest(".form-group")?.classList.toggle("hidden-field", !show);
    el.required = show;
    if (!show) el.value = "";
  });
  show ? seedProvinces() : resetBelow();
}

negaraSelect.addEventListener("change", toggleIndonesiaFields);

provinsiSelect.addEventListener("change", async (e) => {
  const opt = (e.target as HTMLSelectElement).selectedOptions[0];
  resetBelow("provinsi");
  const id = opt?.dataset?.id || opt?.value;
  if (!id) return;
  try {
    const regencies = await regionService.getRegencies(id);
    setSelectOptions(kotaSelect, regencies, optLabel("kota_select") || "-- Pilih Kabupaten/Kota --");
  } catch (err: any) {
    showMessage("error", "Gagal memuat kabupaten/kota: " + err.message);
  }
});

kotaSelect.addEventListener("change", async (e) => {
  const opt = (e.target as HTMLSelectElement).selectedOptions[0];
  resetBelow("kota");
  const id = opt?.dataset?.id || opt?.value;
  if (!id) return;
  try {
    const districts = await regionService.getDistricts(id);
    setSelectOptions(kecamatanSelect, districts, optLabel("kecamatan_select") || "-- Pilih Kecamatan --");
  } catch (err: any) {
    showMessage("error", "Gagal memuat kecamatan: " + err.message);
  }
});

kecamatanSelect.addEventListener("change", async (e) => {
  const opt = (e.target as HTMLSelectElement).selectedOptions[0];
  resetBelow("kecamatan");
  const id = opt?.dataset?.id || opt?.value;
  if (!id) return;
  try {
    const villages = await regionService.getVillages(id);
    setSelectOptions(kelurahanSelect, villages, optLabel("kelurahan_select") || "-- Pilih Kelurahan/Desa --");
  } catch (err: any) {
    showMessage("error", "Gagal memuat kelurahan: " + err.message);
  }
});

// ── Conditional field toggles ────────────────────────────────────────────────
function setupToggles() {
  // Employment toggle
  $$<HTMLInputElement>('input[name="status_kerja"]').forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const show = (e.target as HTMLInputElement).value === "Ya";
      $("#field_perusahaan")?.classList.toggle("hidden-field", !show);
      $("#field_posisi")?.classList.toggle("hidden-field", !show);
    });
  });

  // Previous course toggle
  $$<HTMLInputElement>('input[name="kursus_sebelumnya"]').forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const show = (e.target as HTMLInputElement).value === "Ya";
      $("#field_kursus_sebelumnya")?.classList.toggle("hidden-field", !show);
    });
  });

  // Additional test toggle
  $<HTMLSelectElement>('select[name="tes_tambahan"]')?.addEventListener("change", (e) => {
    const show = (e.target as HTMLSelectElement).value === "Ya";
    $("#field_tes_tambahan")?.classList.toggle("hidden-field", !show);
  });

  // "Lain lain" kendala toggle
  const kendala9 = $<HTMLInputElement>("#kendala9");
  const kendalaInput = $<HTMLInputElement>("#kendala_lain_input");
  if (kendala9 && kendalaInput) {
    kendalaInput.classList.add("hidden-field");
    kendalaInput.disabled = true;
    kendala9.addEventListener("change", (e) => {
      const checked = (e.target as HTMLInputElement).checked;
      kendalaInput.classList.toggle("hidden-field", !checked);
      kendalaInput.disabled = !checked;
      if (checked) kendalaInput.focus();
      else kendalaInput.value = "";
    });
  }

  // Program level based on class type
  $<HTMLSelectElement>("#jadwal_select")?.addEventListener("change", (e) => {
    const val = (e.target as HTMLSelectElement).value;
    const fieldEl = $<HTMLDivElement>("#field_program_level");
    const selectEl = $<HTMLSelectElement>("#program_level_select");
    const levels = PROGRAM_LEVELS[val];
    if (levels) {
      fieldEl?.classList.remove("hidden-field");
      const placeholder = optLabel("program_level_select") || "-- Pilih Tingkat --";
      selectEl.innerHTML = `<option value="">${placeholder}</option>`;
      levels.forEach((l) => {
        selectEl.innerHTML += `<option value="${l}">${l}</option>`;
      });
    } else {
      fieldEl?.classList.add("hidden-field");
      selectEl.innerHTML = `<option value="">${optLabel("program_level_pending") || "-- Pilih Kelas Terlebih Dahulu --"}</option>`;
    }
  });
}

// ── Study destination (country + university) ─────────────────────────────────
function seedStudyCountrySelect() {
  const countries = Object.keys(TOP_UNIVERSITIES);
  const placeholder = optLabel("negara_studi_select") || "-- Pilih Negara --";
  setSimpleOptions(negaraStudiSelect, countries, placeholder);
}

function setupStudyDestination() {
  negaraStudiSelect.addEventListener("change", (e) => {
    const val = (e.target as HTMLSelectElement).value;
    const uniPlaceholder = optLabel("universitas_select") || "-- Pilih Universitas --";

    if (val === "other") {
      negaraStudiOther.classList.remove("hidden-field");
      universitasSelect.innerHTML = `<option value="">${uniPlaceholder}</option><option value="other">${langDict[currentLang].otherOption}</option>`;
      universitasOther.classList.remove("hidden-field");
      universitasInput.value = "";
      negaraStudiInput.value = "";
      negaraStudiOther.focus();
    } else if (!val) {
      negaraStudiOther.classList.add("hidden-field");
      universitasSelect.innerHTML = `<option value="">${uniPlaceholder}</option>`;
      universitasOther.classList.add("hidden-field");
      universitasInput.value = "";
      negaraStudiInput.value = "";
    } else {
      negaraStudiOther.classList.add("hidden-field");
      negaraStudiInput.value = val;
      setSimpleOptions(universitasSelect, TOP_UNIVERSITIES[val] || [], uniPlaceholder);
      universitasOther.classList.add("hidden-field");
      universitasInput.value = "";
    }
  });

  negaraStudiOther.addEventListener("input", (e) => {
    negaraStudiInput.value = (e.target as HTMLInputElement).value.trim();
  });

  universitasSelect.addEventListener("change", (e) => {
    const val = (e.target as HTMLSelectElement).value;
    if (val === "other") {
      universitasOther.classList.remove("hidden-field");
      universitasInput.value = "";
      universitasOther.focus();
    } else {
      universitasOther.classList.add("hidden-field");
      universitasInput.value = val || "";
    }
  });

  universitasOther.addEventListener("input", (e) => {
    universitasInput.value = (e.target as HTMLInputElement).value.trim();
  });

  seedStudyCountrySelect();
  negaraStudiOther.classList.add("hidden-field");
  universitasOther.classList.add("hidden-field");
  negaraStudiInput.value = "";
  universitasInput.value = "";
}

// ── Navigation ───────────────────────────────────────────────────────────────
function showSection(num: number) {
  $$(".form-section").forEach((s) => s.classList.remove("active"));
  $(`.form-section[data-section="${num}"]`)?.classList.add("active");

  $$(".progress-step").forEach((step, i) => {
    step.classList.remove("active", "completed");
    if (i + 1 < num) step.classList.add("completed");
    else if (i + 1 === num) step.classList.add("active");
  });

  // Announce section change to screen readers
  const title = $(`.form-section[data-section="${num}"] .section-title`);
  if (title) {
    title.setAttribute("tabindex", "-1");
    title.focus();
  }

  btnPrev.style.display = num === 1 ? "none" : "block";
  btnNext.style.display = num === TOTAL_SECTIONS ? "none" : "block";
  btnSubmit.style.display = num === TOTAL_SECTIONS ? "block" : "none";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

btnNext.addEventListener("click", (e) => {
  e.preventDefault();
  if (validator.validateCurrentSection(currentSection)) {
    if (currentSection < TOTAL_SECTIONS) {
      currentSection++;
      showSection(currentSection);
    }
  }
});

btnPrev.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentSection > 1) {
    currentSection--;
    showSection(currentSection);
  }
});

// ── Message helper ───────────────────────────────────────────────────────────
function showMessage(type: "error" | "success", html: string) {
  messageEl.classList.remove("error", "success");
  messageEl.classList.add(type);
  messageEl.innerHTML = html;
  messageEl.style.display = "block";
}

// ── Dropzone ─────────────────────────────────────────────────────────────────
function setupDropzone() {
  const dropzone = $<HTMLDivElement>("#dropzone");
  const fileInput = $<HTMLInputElement>("#bukti_pembayaran");
  const chooseBtn = $<HTMLButtonElement>("#chooseFileBtn");
  const fileInfo = $<HTMLDivElement>("#bukti_file_info");
  const fileNameEl = $<HTMLParagraphElement>("#bukti_file_name");
  const removeBtn = $<HTMLButtonElement>("#remove_bukti_btn");
  const previewBtn = $<HTMLButtonElement>("#preview_bukti_btn");
  const errorEl = $<HTMLDivElement>("#bukti_error");

  function validateFile(file: File): { ok: boolean; reason?: string } {
    const allowed = ["image/jpeg", "image/png", "application/pdf"];
    if (!allowed.includes(file.type)) return { ok: false, reason: "Format file harus JPG, PNG, atau PDF" };
    if (file.size > 5 * 1024 * 1024) return { ok: false, reason: "Ukuran file maksimal 5MB" };
    return { ok: true };
  }

  function updateUI(file: File | null) {
    if (!file) {
      fileInfo.style.display = "none";
      fileNameEl.textContent = "";
      errorEl.style.display = "none";
      return;
    }
    fileInfo.style.display = "flex";
    fileNameEl.textContent = `${file.name} (${Math.round(file.size / 1024)} KB)`;
    errorEl.style.display = "none";
  }

  function setFile(file: File) {
    const check = validateFile(file);
    if (!check.ok) {
      errorEl.textContent = check.reason!;
      errorEl.style.display = "block";
      fileInput.value = "";
      updateUI(null);
      return;
    }
    const dt = new DataTransfer();
    dt.items.add(file);
    fileInput.files = dt.files;
    updateUI(file);
  }

  chooseBtn.addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", (e) => {
    const f = (e.target as HTMLInputElement).files?.[0];
    if (f) setFile(f);
  });

  dropzone.addEventListener("dragover", (e) => { e.preventDefault(); dropzone.classList.add("dragover"); });
  dropzone.addEventListener("dragleave", (e) => { e.preventDefault(); dropzone.classList.remove("dragover"); });
  dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropzone.classList.remove("dragover");
    const f = e.dataTransfer?.files?.[0];
    if (f) setFile(f);
  });

  removeBtn.addEventListener("click", () => { fileInput.value = ""; updateUI(null); });
  previewBtn.addEventListener("click", () => {
    const f = fileInput.files?.[0];
    if (!f) return;
    const url = URL.createObjectURL(f);
    window.open(url, "_blank");
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  });
}

// ── Password UI ──────────────────────────────────────────────────────────────
function setupPasswordUI() {
  const pw = $<HTMLInputElement>("#lms_password");
  const toggle = $<HTMLButtonElement>("#togglePassword");
  const meterBar = $<HTMLDivElement>("#password_meter_bar");
  const help = $<HTMLElement>("#password_help");

  function score(s: string): number {
    let sc = 0;
    if (s.length >= 8) sc++;
    if (/[A-Z]/.test(s)) sc++;
    if (/[0-9]/.test(s)) sc++;
    if (/[^A-Za-z0-9]/.test(s)) sc++;
    return sc;
  }

  function updateMeter() {
    const sc = score(pw.value);
    meterBar.style.width = `${(sc / 4) * 100}%`;
    const d = langDict[currentLang];
    if (sc <= 1) {
      meterBar.style.background = "#e74c3c";
      help.textContent = d.passwordHelpWeak;
    } else if (sc === 2) {
      meterBar.style.background = "#f1c40f";
      help.textContent = d.passwordHelpMedium;
    } else {
      meterBar.style.background = "#2ecc71";
      help.textContent = d.passwordHelpStrong;
    }
  }

  toggle.addEventListener("click", () => {
    const isHidden = pw.type === "password";
    pw.type = isHidden ? "text" : "password";
    toggle.textContent = isHidden
      ? langDict[currentLang].passwordHide
      : langDict[currentLang].passwordShow;
  });

  // Confirm password toggle
  const pwC = $<HTMLInputElement>("#lms_password_confirm");
  const toggleC = $<HTMLButtonElement>("#togglePasswordConfirm");
  if (toggleC && pwC) {
    toggleC.addEventListener("click", () => {
      const isHidden = pwC.type === "password";
      pwC.type = isHidden ? "text" : "password";
      toggleC.textContent = isHidden
        ? langDict[currentLang].passwordHide
        : langDict[currentLang].passwordShow;
    });
  }

  pw.addEventListener("input", updateMeter);
  updateMeter();
}

// ── Review modal ─────────────────────────────────────────────────────────────
function openReviewModal(issues: Array<{ label: string; detail: string }>) {
  const d = langDict[currentLang].review;
  reviewModalHdr.className = "review-modal-header " + (issues.length ? "has-errors" : "is-ok");

  if (issues.length) {
    reviewModalTitle.textContent = d.issuesTitle;
    reviewBtnFix.style.display = "inline-flex";
    reviewBtnConfirm.style.display = "none";

    const ul = document.createElement("ul");
    ul.className = "review-issue-list";
    issues.forEach(({ label, detail }) => {
      const li = document.createElement("li");
      li.className = "review-issue-item";
      li.innerHTML = `
        <span class="issue-dot"></span>
        <span class="issue-text">
          <span class="issue-label">${label}</span>
          <span class="issue-detail"> — ${detail}</span>
        </span>`;
      ul.appendChild(li);
    });
    reviewModalBody.innerHTML = "";
    reviewModalBody.appendChild(ul);
  } else {
    reviewModalTitle.textContent = d.readyTitle;
    reviewBtnFix.style.display = "inline-flex";
    reviewBtnConfirm.style.display = "inline-flex";
    reviewModalBody.innerHTML = `<div class="review-ok-msg">${d.readyMsg}</div>`;
  }

  reviewModal.style.display = "flex";
  document.body.style.overflow = "hidden";

  // Trap focus inside modal for a11y
  reviewBtnFix.focus();
}

function closeReviewModal() {
  reviewModal.style.display = "none";
  document.body.style.overflow = "";
}

reviewBtnFix.addEventListener("click", closeReviewModal);
$<HTMLDivElement>("#review-modal-backdrop").addEventListener("click", closeReviewModal);

// Close modal on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && reviewModal.style.display === "flex") {
    closeReviewModal();
  }
});

// ── Submit ───────────────────────────────────────────────────────────────────
async function doSubmit() {
  closeReviewModal();
  loadingEl.style.display = "block";
  messageEl.style.display = "none";

  try {
    const formData = new FormData(form);

    // Resolve region select visible text (store human-readable names)
    const regionSelects: Array<[string, HTMLSelectElement]> = [
      ["provinsi", provinsiSelect],
      ["kota", kotaSelect],
      ["kecamatan", kecamatanSelect],
      ["kelurahan", kelurahanSelect],
    ];
    for (const [key, sel] of regionSelects) {
      const txt = sel.selectedOptions[0]?.textContent;
      if (txt) formData.set(key, txt);
    }

    // POST to server-side endpoint (Supabase stays server-side)
    const res = await fetch("/api/register", {
      method: "POST",
      body: formData,
    });

    // Safely parse JSON – guard against empty or non-JSON responses
    let json: { ok?: boolean; error?: string; buktiUrl?: string };
    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      throw new Error(
        `Server returned unexpected content type (${res.status}). ` +
        "API endpoint may not be deployed correctly."
      );
    }
    const text = await res.text();
    if (!text) {
      throw new Error(`Server returned empty response (${res.status})`);
    }
    try {
      json = JSON.parse(text);
    } catch {
      throw new Error(`Server returned invalid JSON (${res.status})`);
    }

    if (!res.ok || !json.ok) {
      throw new Error(json.error || "Terjadi kesalahan");
    }

    // Success
    loadingEl.style.display = "none";
    const d = langDict[currentLang];

    let previewHtml = "";
    if (json.buktiUrl) {
      if (/\.(jpg|jpeg|png)$/i.test(json.buktiUrl)) {
        previewHtml = `<br><img src="${json.buktiUrl}" alt="${d.viewPaymentPDF}" style="max-width:320px;max-height:320px;margin-top:10px;border:1px solid #ccc;">`;
      } else if (/\.pdf$/i.test(json.buktiUrl)) {
        previewHtml = `<br><a href="${json.buktiUrl}" target="_blank" rel="noopener">${d.viewPaymentPDF}</a>`;
      } else {
        previewHtml = `<br><a href="${json.buktiUrl}" target="_blank" rel="noopener">${d.downloadPayment}</a>`;
      }
    }

    showMessage("success", d.successSubmission + previewHtml);
    showToast(d.successSubmission, "success");

    // Reset
    form.reset();
    currentSection = 1;
    showSection(1);
    ["field_perusahaan", "field_posisi", "field_kursus_sebelumnya", "field_tes_tambahan", "field_program_level"].forEach((id) => {
      document.getElementById(id)?.classList.add("hidden-field");
    });
  } catch (err: any) {
    loadingEl.style.display = "none";
    const errMsg = err?.message || "Terjadi kesalahan";
    showMessage("error", "Error: " + errMsg);

    const t = langDict[currentLang].toast;
    const toastMsg = /bukti|payment/i.test(errMsg)
      ? t.fileRequired
      : t.genericError.replace("{msg}", errMsg);
    showToast(toastMsg, "error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validator.validateCurrentSection(currentSection)) return;
  const formData = new FormData(form);
  const issues = validator.collectAllIssues(formData);
  // If everything is valid, skip the modal and submit directly
  if (issues.length === 0) {
    doSubmit();
  } else {
    openReviewModal(issues);
  }
});

reviewBtnConfirm.addEventListener("click", () => doSubmit());

// ── Language toggle binding ──────────────────────────────────────────────────
const langSwitch = $<HTMLInputElement>("#lang-switch");
if (langSwitch) {
  langSwitch.addEventListener("change", (e) => {
    const lang = (e.target as HTMLInputElement).checked ? "en" : "id";
    setLanguage(lang);
    const label = document.querySelector('label[for="lang-switch"]');
    label?.setAttribute("aria-label", lang === "en" ? "English" : "Bahasa Indonesia");
  });
  langSwitch.checked = false;
}

// ── Boot ─────────────────────────────────────────────────────────────────────
setLanguage("id");
setupToggles();
setupStudyDestination();
setupDropzone();
setupPasswordUI();
showSection(1);
toggleIndonesiaFields();
