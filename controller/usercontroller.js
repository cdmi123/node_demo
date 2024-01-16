var user = require('../model/usermodel');

exports.index = async (req,res) => {
    
    var data = await user.create(req.body);

    res.status(200).json({
        data
    })
}

exports.get_data = async (req,res) => {
    
    var data = await user.find();

    res.status(200).json({
        data
    })
}

exports.delete_data = async (req,res) => {
    
    var id = req.params.id;

    var data = await user.findByIdAndDelete(id);

    res.status(200).json({
        status:"delete data"
    })
}