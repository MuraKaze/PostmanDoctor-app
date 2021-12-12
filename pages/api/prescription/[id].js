/* eslint-disable import/no-anonymous-default-export */
import dbConnect from "../../../utils/dbConnect";
import Prescription from "../../../models/prescription";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const prescription = await Prescription.findById(id);
        if (!prescription) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: prescription });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const prescription = await Prescription.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!prescription) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: prescription });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedPrescription = await Prescription.deleteOne({ _id: id });
        if (!deletedPrescription) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    default:
      return res.status(400).json({ success: false });
      break;
  }
};
