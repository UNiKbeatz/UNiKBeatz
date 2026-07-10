"use client";

import { useState } from "react";

export type LicenseOption = {
  name: string;
  price: number;
};

type LicenseSelectorProps = {
  licenses: LicenseOption[];
  beatTitle: string;
};

export default function LicenseSelector({
  licenses,
  beatTitle,
}: LicenseSelectorProps) {
  const [selectedLicense, setSelectedLicense] =
    useState<LicenseOption | null>(null);

  return (
    <div className="mt-5">
      <p className="text-xs text-gray-500">Choose a license</p>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {licenses.map((license) => {
          const isSelected = selectedLicense?.name === license.name;

          return (
            <button
              key={license.name}
              type="button"
              onClick={() => setSelectedLicense(license)}
              className={`rounded-xl border px-3 py-3 text-left transition ${
                isSelected
                  ? "border-violet-500 bg-violet-500/15"
                  : "border-white/10 bg-white/5 hover:border-violet-500/50 hover:bg-violet-500/10"
              }`}
            >
              <span className="block text-xs text-gray-400">
                {license.name}
              </span>

              <span className="mt-1 block font-semibold text-white">
                €{license.price}
              </span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        disabled={!selectedLicense}
        onClick={() => {
          if (!selectedLicense) return;

          alert(
            `${beatTitle} — ${selectedLicense.name} — €${selectedLicense.price}`,
          );
        }}
        className="mt-5 w-full rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-gray-500"
      >
        {selectedLicense
          ? `Add to cart — €${selectedLicense.price}`
          : "Select a license"}
      </button>
    </div>
  );
}