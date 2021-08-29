const Range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};
const DOTS = "...";
export const CreatePagination = (totalCount,pageSize,siblingCount,currentPage) => {
  const totalPageCount = Math.ceil(totalCount / pageSize);
  const totalPageNumbers = siblingCount + 5;
  if (totalPageNumbers >= totalPageCount) {
    return Range(1, totalPageCount);
  }
  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(
    currentPage + siblingCount,
    totalPageCount
  );
  const isShowLeftDots = leftSiblingIndex > 2;
  const isShowRightDots = rightSiblingIndex < totalPageCount - 2;
  const firstPageIndex = 1;
  const lastPageIndex = totalPageCount;

  if (!isShowLeftDots && isShowRightDots) {
    let leftItemCount = 3 + 2 * siblingCount;
    let leftRange = Range(1, leftItemCount);

    return [...leftRange, DOTS, totalPageCount];
  }
  if (isShowLeftDots && !isShowRightDots) {
    let rightItemCount = 3 + 2 * siblingCount;
    let rightRange = Range(totalPageCount - rightItemCount + 1, totalPageCount);
    return [firstPageIndex, DOTS, ...rightRange];
  }
  if (isShowLeftDots && isShowRightDots) {
    let middleRange = Range(leftSiblingIndex, rightSiblingIndex);
    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
  }
};
