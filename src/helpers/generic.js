const formatImageName = (index) => {
  if (index < 10) return "00" + index;
  if (index >= 10 && index < 100) return "0" + index;
  return index;
}

export { formatImageName }