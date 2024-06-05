import ColorList from "colorList/ColorList";
import ColorPicker from "colorPicker/ColorPicker";
import { useColors } from "colorPicker/useColors";
import ReactDOM from "react-dom/client";

const App = () => {
  const { handleChangeColor, handleSubmitSaveColor, color, colorList } =
    useColors();

  return (
    <>
      <h1 className="text-center bg-dark text-white p-2">Color Picker</h1>

      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-4">
            <ColorList colorList={colorList} />
          </div>
          <div className="col-12 col-md-8">
            <ColorPicker
              handleChangeColor={handleChangeColor}
              handleSubmitSaveColor={handleSubmitSaveColor}
              color={color}
            />
          </div>
        </div>
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
