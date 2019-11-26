class IndexController {
  index (req, res) {
    res.json({
      app: 'Prompt Mode Web Service',
      version: '1.0.0'
    })
  }
}

export default new IndexController()
