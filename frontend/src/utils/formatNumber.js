export function formatNumberWithDots(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function cadToRupiah(cad) {
  return cad * 11456;
}
