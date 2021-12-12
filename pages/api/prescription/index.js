/* eslint-disable import/no-anonymous-default-export */
import dbConnect from "../../../utils/dbConnect";
import Prescription from "../../../models/prescription";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
        try {
            const prescriptions = await Prescription.find({});

            res.status(200).json({ success: true, data: prescriptions })
        } catch (error) {
            res.status(400).json({ success: false });
        }
        break;
    case 'POST':
        try {
            const prescription = await Prescription.create(req.body);

            res.status(201).json({ success: true, data: prescription })
        } catch (error) {
            res.status(400).json({ success: false });
        }
        break;
    default:
        res.status(400).json({ success: false });
        break;
}
}