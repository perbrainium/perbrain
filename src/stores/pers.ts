import { persLocal } from "@/modules/localforage";
import type { Pers, Per } from "@/types/pers";

let _pers: Pers = {};

export const pers = (): Pers => {
    return Object.freeze({ ..._pers });
};

export async function initPers() {
  const keys = await persLocal.keys();
  _pers = Object.fromEntries(keys.map((key) => [key, undefined]));
}

export async function getPer(key: string): Promise<Per> {
  if (!_pers[key]) 
    _pers[key] = (await persLocal.getItem(key)) as Per;
  return _pers[key];
}

export async function setPer(key: string, per: Per) {
  await persLocal.setItem(key, per);
  _pers[key] = per;
}

export async function removePer(key: string) {
  await persLocal.removeItem(key);
  delete _pers[key];
}
