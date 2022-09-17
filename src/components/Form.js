import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import * as type from "../redux/actions/type";
import * as action from "../redux/actions";
import { useNavigate } from "react-router-dom";

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }

  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }

  & > form > input[type="text"] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }

  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

function Form(props) {
  const {inputs, setInputs} = props;
  const navigate = useNavigate();

  const handleSetInputs = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputs.id) {
      dispatch({
        type: type.UPDATE_COMMENT,
        id: inputs.id,
        payload: inputs
      });
    }

    if (!inputs.id) {
      dispatch({
        type: type.ADD_COMMENT,
        payload: inputs,
      });
      navigate({
        pathname: '/',
        search: `page=1`,
      })
    }
    dispatch(action.getComment());
    setInputs({})
  };

  return (
    <FormStyle>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          required
          onChange={handleSetInputs}
          value={inputs.profile_url || ''}
        />
        <br/>
        <input type="text" name="author" placeholder="작성자" onChange={handleSetInputs} value={inputs.author || ''}/>
        <br/>
        <textarea name="content" placeholder="내용" required onChange={handleSetInputs} value={inputs.content || ''}/>
        <br/>
        <input type="text" name="createdAt" placeholder="2020-05-30" required onChange={handleSetInputs} value={inputs.createdAt || ''}/>
        <br/>
        <button type="submit">등록</button>
      </form>
    </FormStyle>
  );
}

export default Form;
