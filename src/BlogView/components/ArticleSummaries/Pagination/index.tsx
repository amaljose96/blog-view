interface IPaginationProps {
  pageNumber: number;
  numberOfPages: number;
  setPageNumber: (pageNumber: number) => void;
}

export function Pagination({
  pageNumber,
  numberOfPages,
  setPageNumber,
}: IPaginationProps) {
  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > numberOfPages) return; // Prevent out-of-range page numbers
    setPageNumber(newPage);
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(pageNumber - 1)}
        disabled={pageNumber === 1}
        className="pagination-btn"
      >
        &laquo; Prev
      </button>

      <span className="page-numbers">
        {Array.from({ length: numberOfPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`page-btn ${pageNumber === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </span>

      <button
        onClick={() => handlePageChange(pageNumber + 1)}
        disabled={pageNumber === numberOfPages}
        className="pagination-btn"
      >
        Next &raquo;
      </button>
    </div>
  );
}
