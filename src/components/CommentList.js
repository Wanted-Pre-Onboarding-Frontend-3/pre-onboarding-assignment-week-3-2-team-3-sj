import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import * as type from "../redux/actions/type";
import * as action from "../redux/actions";
import { useNavigate } from "react-router-dom";

const Comment = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Button = styled.div`
  text-align: right;
  margin: 10px 0;

  & > a {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

function CommentList(props) {
  const {comments, setInputs} = props;
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const deleteComment = (id) => {
    dispatch({
      type: type.DELETE_COMMENT,
      id
    });
    dispatch(action.getComment());
    navigate({
      pathname: '/',
      search: 'page=1'
    });
  };

  const handleSetInputs = (comment) => {
    setInputs(() => {
      return {
        id: comment.id,
        profile_url: comment.profile_url,
        content: comment.content,
        createdAt: comment.createdAt,
        author: comment.author
      };
    });
  };

  return comments.map((comment, key) => {
    return (
      <Comment key={key}>
        <div>{comment.id}</div>
        <img src={comment.profile_url} alt=""/>

        {comment.author}

        <CreatedAt>{comment.createdAt}</CreatedAt>

        <Content>{comment.content}</Content>

        <Button>
          <a onClick={() => handleSetInputs(comment)}>수정</a>
          <a onClick={() => deleteComment(comment.id)}>삭제</a>
        </Button>

        <hr/>
      </Comment>);
  });
}

export default CommentList;
