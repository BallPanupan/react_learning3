import "./index.css";

// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("mess-done").style.display = "none";
// });

function Form() {
  return (
    <div className="in-form">
      <form action="javascript:void(0)" method="post" id="my-form">
        <h1>Campaige Repost</h1>
        <div class="input_x">
          <p>Sheet id</p>
          <input
            type="text"
            id="spreadsheet_id"
            name="spreadsheet_id"
            size="50"
            placeholder="Sheets ID"
            value="15-wJkhwP_vg8vcqtqcGR8YJuyenDd0HqaA0zUMeClFc"
          />
          <br />
        </div>
        <div class="input_x">
          <p>Campaige ID</p>
          <input
            type="text"
            id="campaige_id"
            name="campaige_id"
            size="50"
            placeholder="Campaige ID"
            value="2375102"
          />
        </div>
        <div class="input_x">
          <p>source</p>
          <select name="source" id="source">
            <option value="adform">adform</option>
            <option value="beeswax">beeswax</option>
          </select>
        </div>
        <div class="d-load" id="d-load">
          <div class="loader" id="loader"></div>
          <div id="mess-done">
            <h1>Done</h1>
          </div>
        </div>
        <input type="submit" id="btn_submit" onclick="click_submit()" />
      </form>
    </div>
  );
}

export default Form;
