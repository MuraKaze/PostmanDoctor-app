/* eslint-disable import/no-anonymous-default-export */
import dbConnect from "../../../utils/dbConnect";
import Appointment from "../../../models/appointment";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const appointment = await Appointment.findById(id);
        if (!appointment) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: appointment });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const appointment = await Appointment.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!appointment) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: appointment });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedAppointment = await Appointment.deleteOne({ _id: id });
        if (!deletedAppointment) {
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
