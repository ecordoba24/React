import React, { useContext } from "react";
import { FormContext } from "./Form.jsx";

export default (props) => {
  const context = useContext(FormContext);

  const addToList = (value, list) => {
    console.log(value);
    console.log(context.likes);
    context.setLikes([value].concat(context.likes));
  };

  const removeFromList = (value, list) => {
    console.log(value);
    console.log(context.likes);
    context.setLikes(context.likes.filter((v) => v !== value));
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="likes[]"
          onChange={(ev) =>
            ev.target.checked ? addToList("Ruby") : removeFromList("Ruby")
          }
        />
        Ruby
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="likes[]"
          onChange={(ev) =>
            ev.target.checked
              ? addToList("Javascript")
              : removeFromList("Javascript")
          }
        />
        Javascript
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="likes[]"
          onChange={(ev) =>
            ev.target.checked ? addToList("PHP") : removeFromList("PHP")
          }
        />
        PHP
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="likes[]"
          onChange={(ev) =>
            ev.target.checked ? addToList("React") : removeFromList("React")
          }
        />
        React
      </label>
    </div>
  );
};
