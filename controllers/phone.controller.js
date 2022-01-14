const Phone = require("../models/Phone");

/*************************** Add new phone ********************* */

exports.addPhone = async (req, res) => {
  const newPhone = new Phone({ ...req.body });

  try {
    await newPhone.save();
    res.status(200).json({ msg: "Phone added successfully" });
  } catch (error) {
    console.log("add phone failed", error);

    res.status(400).json({ errors: [{ msg: "Add phone failed" }] });
  }
};

/*************************** Get all phones ********************* */

exports.getAllPhones = async (req, res) => {
  try {
    const phones = await Phone.find();
    res.status(200).json({ msg: "Fetch all phones success", phones });
  } catch (error) {
    console.log("fetch all phones failed", error);
    res.status(400).json({ errors: [{ msg: "Fetch all phones failed" }] });
  }
};

/*************************** Get phone by id ********************* */

exports.getPhoneById = async (req, res) => {
  const { _id } = req.params;

  try {
    const phone = await Phone.findOne({ _id });

    if (!phone)
      return res
        .status(404)
        .json({ errors: [{ msg: "This phone is not availbale anymore" }] });

    res.status(201).json({ msg: "Get phone success", phone });
  } catch (error) {
    console.log("get phone failed", error);
    res.status(400).json({ errors: [{ msg: "Get phone failed" }] });
  }
};

/*************************** Delete phone ********************* */

exports.deletePhone = async (req, res) => {
  const { _id } = req.params;
  try {
    const deletedPhone = await Phone.findByIdAndDelete({ _id });

    res.status(200).json({ msg: "Phone deleted successfully", deletedPhone });
  } catch (error) {
    console.log("Delete phone failed", error);
    res.status(400).json({ msg: "Delete phone failed" });
  }
};

/*************************** Update phone ********************* */

exports.updatePhone = async (req, res) => {
  const { _id } = req.params;

  try {
    const updatedPhone = await Phone.findByIdAndUpdate(
      { _id },
      { $set: { ...req.body } }
    );

    res.status(200).json({ msg: "Phone updated successfully", updatedPhone });
  } catch (error) {
    console.log("update phone failed", error);
    res.status(400).json({ msg: "Update phone failed" });
  }
};
