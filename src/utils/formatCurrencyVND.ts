// src/utils/formatCurrency.ts
export function formatCurrencyVND(amount: number): string {
  if (isNaN(amount)) return "0₫";

  // Dùng Intl để format chuẩn locale Việt Nam
  const formatted = amount.toLocaleString("vi-VN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  // Thêm ký hiệu ₫ sát liền sau số (không có khoảng trắng)
  return `${formatted}₫`;
}
