import * as React from 'react';

const ArticleCheckbox = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return <Checkbox label="Is Published" value={checked} onChange={handleChange}/>

};

const Checkbox = ({ label, value, onChange }) => {
  return (
    <>
        <label className="form__label" >{label}</label>
        <input type="checkbox" checked={value} onChange={onChange} id="post__publish" name="post__publish" />
    </>
  );
};

export default ArticleCheckbox;

    // <div>
      /* <p>Is "My Value" checked? {checked.toString()}</p>
    </div> */