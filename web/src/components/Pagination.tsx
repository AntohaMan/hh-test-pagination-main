import Pagination from 'react-bootstrap/Pagination';
  const Pages = ({ items, pageSize, currentPage, onPageChange }) => {

  const pagesCount = Math.ceil(items / pageSize); // 100/10

  if (pagesCount === 1) return null;
  let pages= Array.from({ length: 10 }, (_, i) => i + 1);

  const range = (start:number, end:number) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };
  if(currentPage > 10 && currentPage <= pagesCount - 10){
     pages = range(currentPage, currentPage + 9);
  }
  if(currentPage>pagesCount - 10 && currentPage <= pagesCount){
    pages = range(pagesCount - 9, pagesCount);
  }

  return (
    <Pagination>
      <Pagination.First onClick={()=> onPageChange(currentPage=1)}/>
      <Pagination.Prev onClick={()=> onPageChange(currentPage < 2 ? 1 : currentPage - 1)}/>
        {pages.map((page) => (
          page === currentPage ?
          <Pagination.Item key={page} active>{page}</Pagination.Item>
          :
           <Pagination.Item key={page} onClick={() => onPageChange(page)}>{page}</Pagination.Item>
        ))
        }
      <Pagination.Next onClick={()=> onPageChange(currentPage<pagesCount ? currentPage + 1 : pagesCount)}/>
      <Pagination.Last onClick={()=> onPageChange(currentPage=pagesCount)}/>
    </Pagination>
  );
};

export const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};

export default Pages;
