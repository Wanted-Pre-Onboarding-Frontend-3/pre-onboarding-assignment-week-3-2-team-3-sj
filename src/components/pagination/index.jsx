import React from 'react';
import { useNavigate } from 'react-router-dom';

import { DivWrap, PageButton, PaginationItems, PaginationWrap } from './styles';

export const Pagination = (props) => {
  const { totalPosts = 0, postsPerPage, currentPage } = props;
  console.log({postsPerPage, currentPage});
  const totalCount = Math.ceil(totalPosts / postsPerPage);
  const pageNumbers = Array.from({ length: totalCount }, (v, index) => index + 1);

  const navigate = useNavigate();
  const movePage = (number) => {
    navigate({
      pathname: '/',
      search: `page=${number}`,
    });
  };

  return (
    <DivWrap>
      <PaginationWrap>
        {pageNumbers.map((pageNumber) => {
          return (
            <PaginationItems isClicked={Number(currentPage) === pageNumber} key={pageNumber}>
              <PageButton onClick={() => movePage(pageNumber)}>{pageNumber}</PageButton>
            </PaginationItems>
          );
        })}
      </PaginationWrap>
    </DivWrap>
  );
};
