import Admin from '../models/admin.model';

const index = async (req, res) => {
  const admins = await Admin.find();
  res.render('admin/index', {
    admins
  });
}

module.exports = { index }