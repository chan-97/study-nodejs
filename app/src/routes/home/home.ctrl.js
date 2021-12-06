"use strict";

const users = {
  id: ["dbgnlcks", "star", "idid"],
  pw: ["1234", "560323", "3434"]
};

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  }
};

const process = {
  login: (req, res) => {
    const { id, pw } = req.body;
    if(users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if(users.pw[idx] === pw) {
        return res.json({ success: true });
      }

      return res.json({
        success: false,
        msg: "비밀번호가 틀렸습니다."
      })
    }
    
   return res.json({
      success: false,
      msg: "존재하지 않는 아이디입니다."
    })
  }
};


module.exports = { output, process };