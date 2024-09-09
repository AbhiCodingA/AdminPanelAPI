let express = require('express');
let pageModel = require('../../model/pageModel');
let router = express();

// Fetch and render the page list
router.get('/', (req, res) => {
  pageModel.find({})
    .then(pages => {
      res.render('../views/backend/page-file', { y: pages });
    })
    .catch(err => res.status(500).send(err));
});

// Handle page addition
router.post('/add-page/', (req, res) => {
  pageModel.create({
    pageUrl: req.body.page_Url,
    pageNavText: req.body.page_Nav_Text,
    pageTitle: req.body.page_Title,
    pageMetaDescription: req.body.page_Meta_Description,
    pageMetaKeyword: req.body.page_Meta_Keyword,
    pageHeading: req.body.page_Heading,
    pageDetails: req.body.Page_Details,
  })
  .then(() => res.redirect('/admin/page'))
  .catch(err => res.status(500).send(err));
});

// Render the add-page form
router.get('/add-page', (req, res) => {
  res.render('../views/backend/add-page-file');
});

// Render the edit-page form
router.get('/edit-page/:id', (req, res) => {
  pageModel.findById(req.params.id)
    .then(page => {
      res.render('../views/backend/edit-page-file', { page });
    })
    .catch(err => res.status(500).send(err));
});

// Handle page update
router.post('/edit-page/:id', (req, res) => {
  pageModel.findByIdAndUpdate(req.params.id, {
    pageUrl: req.body.page_Url,
    pageNavText: req.body.page_Nav_Text,
    pageTitle: req.body.page_Title,
    pageMetaDescription: req.body.page_Meta_Description,
    pageMetaKeyword: req.body.page_Meta_Keyword,
    pageHeading: req.body.page_Heading,
    pageDetails: req.body.Page_Details,
  }, { new: true })
  .then(() => res.redirect('/admin/page'))
  .catch(err => res.status(500).send(err));
});

// Handle page deletion
router.post('/delete/:id', (req, res) => {
  pageModel.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/admin/page'))
    .catch(err => res.status(500).send(err));
});

module.exports = router;
