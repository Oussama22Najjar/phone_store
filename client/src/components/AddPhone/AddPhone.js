import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { Button } from "react-bootstrap";
import "./addphone.css";
import { useHistory } from "react-router-dom";
import {
  addPhone,
  getAllPhone,
  getPhone,
  toggleFalse,
  toggleTrue,
} from "../../JS/actions/phoneActions";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AddPhone = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [modalIsOpen, setIsOpen] = useState(false);
  const isEdit = useSelector((state) => state.phoneReducer.isEdit);
  const phone = useSelector((state) => state.phoneReducer.phone);

  const [image, setImage] = useState("");
  const [camera, setCamera] = useState("");
  const [model, setModel] = useState("");
  const [ram, setRam] = useState("");
  const [rom, setRom] = useState("");
  const [price, setPrice] = useState("");
  const [resolution, setResolution] = useState("");
  const [category, setCategory] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    // openModal();
    if (isEdit) {
      setResolution(phone.resolution);
      setModel(phone.model);
      setImage(phone.image);
      setRam(phone.ram);
      setRom(phone.rom);
      setCamera(phone.camera);
      setPrice(phone.price);
      setCategory(phone.category);
    } else {
      setResolution("");
      setModel("");
      setImage("");
      setRam("");
      setRom("");
      setCamera("");
      setPrice("");
      setCategory("");
    }
  }, [isEdit, phone]);

  const submitPhone = (e) => {
    e.preventDefault();
    const phone = {
      model,
      ram,
      image,
      camera,
      price,
      resolution,
      rom,
      category,
    };

    if (
      resolution === "" ||
      model === "" ||
      ram === "" ||
      camera === "" ||
      image === ""
    ) {
      return alert("Empty field");
    }

    dispatch(addPhone(phone));
    dispatch(getAllPhone());

    // history.push("/main");

    setResolution("");
    setModel("");
    setImage("");
    setRam("");
    setRom("");
    setCamera("");
    setPrice("");
    setCategory("");
    closeModal();
  };

  const edit = (e) => {
    e.preventDefault();

    const editedPhone = {
      model,
      ram,
      image,
      camera,
      price,
      resolution,
      rom,
      category,
    };
    // dispatch(editUser(phone._id, editedPhone));
    closeModal();
  };

  return (
    <div>
      <button onClick={() => openModal()}>Add New Phone</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        Add New Phone
        <form>
          <div className="form-group">
            <label htmlFor="model">Model</label>
            <input
              type="text"
              className="form-control"
              value={model}
              id="model"
              placeholder="Model"
              onChange={(e) => setModel(e.target.value)}
            />
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="ram">Ram</label>
              <input
                type="text"
                className="form-control"
                id="ram"
                placeholder="Ram"
                onChange={(e) => setRam(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="rom">Rom</label>
              <input
                type="text"
                className="form-control"
                value={rom}
                id="rom"
                placeholder="Rom"
                onChange={(e) => setRom(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="camera">Camera</label>
              <input
                type="text"
                className="form-control"
                id="camera"
                placeholder="Camera"
                onChange={(e) => setCamera(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="resolution">Resolution</label>
              <input
                type="text"
                className="form-control"
                value={resolution}
                id="resolution"
                placeholder="Resolution"
                onChange={(e) => setResolution(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="image">Photo</label>
              <input
                type="text"
                className="form-control"
                value={image}
                id="image"
                placeholder="Photo"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="price">price</label>
              <input
                type="text"
                className="form-control"
                value={price}
                id="price"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              className="form-control"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option selected>Choose category</option>
              <option>new</option>
              <option>reconditioned</option>
            </select>
          </div>

          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => submitPhone(e)}
          >
            ADD PHONE
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddPhone;
{
  /* <Button
          variant="secondary"
          onClick={() => {
            dispatch(getPhone(phone._id));
            dispatch(toggleTrue());
          }}
        >
          Edit
        </Button> */
}
