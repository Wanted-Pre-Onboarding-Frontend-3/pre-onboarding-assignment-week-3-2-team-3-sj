import React, { useState } from "react";
import CommentListContainer from "./containers/CommentListContainer";
import FormContainer from "./containers/FormContainer";
import { useSearchParams } from "react-router-dom";
import PageListContainer from "./containers/PageListContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as action from "./redux/actions";

const PAGE_LIMIT = 4;
function App() {
  const [inputs, setInputs] = useState({});

  const dispatch = useDispatch();
  const {comments} = useSelector((state) => state.getComments);

  useEffect(() => {
    dispatch(action.getComment());
  }, []);

  const [searchParams] = useSearchParams();

  const postPerPage = PAGE_LIMIT;
  const currentPage = searchParams.get('page');
  const indexOfLast = (Number(currentPage) || 1) * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;

  const currentPosts = (productsItems) => {
    if (!Array.isArray(productsItems)) {
      return undefined;
    }

    return productsItems.slice(indexOfFirst, indexOfLast);
  };

  const currentPageItems = currentPosts(comments);

  return (
    <div>
      <CommentListContainer setInputs={setInputs} comments={currentPageItems}/>
      <PageListContainer
        postsPerPage={postPerPage}
        totalPosts={comments?.length}
        currentPage={currentPage ?? '1'}
      />
      <FormContainer setInputs={setInputs} inputs={inputs}/>
    </div>
  );
}

export default App;
