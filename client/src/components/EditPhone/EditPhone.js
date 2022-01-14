import React, {useState } from "react";
import { useDispatch} from "react-redux";
import Modal from "react-modal";
// import "./addphone.css";
import {
  editPhone,
  getAllPhone,
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

const EditPhone = ({ phone }) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);

  const [image, setImage] = useState(phone.image);
  const [camera, setCamera] = useState(phone.camera);
  const [model, setModel] = useState(phone.model);
  const [ram, setRam] = useState(phone.ram);
  const [rom, setRom] = useState(phone.rom);
  const [price, setPrice] = useState(phone.price);
  const [resolution, setResolution] = useState(phone.resolution);
  const [category, setCategory] = useState(phone.category);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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

    dispatch(editPhone(phone._id, editedPhone));

    closeModal();
  };

  return (
    <div>
      <button onClick={() => openModal()}>Edit phone</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        Edit Phone
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
                value={ram}
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
                value={camera}
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
              value={category}
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
            onClick={(e) => {
              edit(e);
              dispatch(getAllPhone());
            }}
          >
            Edit Phone
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default EditPhone;
