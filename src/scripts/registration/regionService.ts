/**
 * Indonesian region cascade service with caching.
 *
 * Fetches province → regency → district → village from the emsifa API
 * with an in-memory cache so repeated selections don't re-fetch.
 */

interface RegionItem {
  id: string;
  name: string;
}

const API_BASE = "https://www.emsifa.com/api-wilayah-indonesia/api";

export class RegionService {
  private cache = {
    provinces: null as RegionItem[] | null,
    regencies: new Map<string, RegionItem[]>(),
    districts: new Map<string, RegionItem[]>(),
    villages: new Map<string, RegionItem[]>(),
  };

  private async fetchJSON<T>(url: string): Promise<T> {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Gagal memuat data wilayah (${res.status})`);
    return res.json();
  }

  async getProvinces(): Promise<RegionItem[]> {
    if (this.cache.provinces) return this.cache.provinces;
    const data = await this.fetchJSON<RegionItem[]>(`${API_BASE}/provinces.json`);
    this.cache.provinces = data;
    return data;
  }

  async getRegencies(provinceId: string): Promise<RegionItem[]> {
    if (this.cache.regencies.has(provinceId)) return this.cache.regencies.get(provinceId)!;
    const data = await this.fetchJSON<RegionItem[]>(`${API_BASE}/regencies/${provinceId}.json`);
    this.cache.regencies.set(provinceId, data);
    return data;
  }

  async getDistricts(regencyId: string): Promise<RegionItem[]> {
    if (this.cache.districts.has(regencyId)) return this.cache.districts.get(regencyId)!;
    const data = await this.fetchJSON<RegionItem[]>(`${API_BASE}/districts/${regencyId}.json`);
    this.cache.districts.set(regencyId, data);
    return data;
  }

  async getVillages(districtId: string): Promise<RegionItem[]> {
    if (this.cache.villages.has(districtId)) return this.cache.villages.get(districtId)!;
    const data = await this.fetchJSON<RegionItem[]>(`${API_BASE}/villages/${districtId}.json`);
    this.cache.villages.set(districtId, data);
    return data;
  }
}
