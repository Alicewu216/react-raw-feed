

const Input = () => {
  return (
    <div className="input">
      <div class="form-group">
        <select id="product-select" class="form-control custom-select">
          <option value="0" disabled selected>
            Select Product
          </option>
          <option value="sony">Meal 1</option>
          <option value="samsung">Meal 2</option>
          <option value="vizio">Meal 3</option>
          <option value="panasonic">Meal 4</option>
          <option value="phillips">Meal 1</option>
        </select>
      </div>

    </div>
     

  );
};
export default Input;
