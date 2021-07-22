
--------------------PRODUCTS--------------------
List Products
  GET /products
    page	integer	Selects the page of results to return. Default 1.
    count	integer	Specifies how many results per page to return. Default 5.
Product Information
  GET /products/:product_id
    product_id	integer	Required ID of the Product requested
Product Styles
  GET /products/:product_id/styles
    product_id	integer	Required ID of the Product requested
Related Products
  GET /products/:product_id/related
    product_id	integer	Required ID of the Product requested

const prodrouter = (type, prodId) {

  if (type === 'list') {
    return `/products`
  } else if (type === 'info') {
    return `/products/${prodId}`
  } else if (type === 'styles') {
    return `/products/${prodId}`
  } else if (type === 'related') {
    return `/products/${prodId}`
  }

}

--------------------Reviews--------------------
List Reviews
  GET /reviews/
    page	integer	Selects the page of results to return. Default 1.
    count	integer	Specifies how many results per page to return. Default 5.
    sort	text	Changes the sort order of reviews to be based on "newest", "helpful", or "relevant"
    product_id	integer	Specifies the product for which to retrieve reviews.
Get Review Metadata
  GET /reviews/meta
    product_id	integer	Required ID of the product for which data should be returned
Add a Review
  POST /reviews
    product_id	integer	Required ID of the product to post the review for
    rating	int	Integer (1-5) indicating the review rating
    summary	text	Summary text of the review
    body	text	Continued or full text of the review
    recommend	bool	Value indicating if the reviewer recommends the product
    name	text	Username for question asker
    email	text	Email address for question asker
    photos	[text]	Array of text urls that link to images to be shown
    characteristics	object	Object of keys representing characteristic_id and values representing the review value for that characteristic. { "14": 5, "15": 5 //...}
Mark Review as Helpful
  PUT /reviews/:review_id/helpful
    reveiw_id	integer	Required ID of the review to update
Report Review
  PUT /reviews/:review_id/report
    review_id	integer	Required ID of the review to update

--------------------Questions & Answers--------------------
List Questions
  GET /qa/questions
    product_id	integer	Specifies the product for which to retrieve questions.
    page	integer	Selects the page of results to return. Default 1.
    count	integer	Specifies how many results per page to return. Default 5.
Answers List
  GET /qa/questions/:question_id/answers
    Parameters
      question_id	integer	Required ID of the question for wich answers are needed
    Query Parameters
      page	integer	Selects the page of results to return. Default 1.
      count	integer	Specifies how many results per page to return. Default 5.
Add a Question
  POST /qa/questions
    body	text	Text of question being asked
    name	text	Username for question asker
    email	text	Email address for question asker
    product_id	integer	Required ID of the Product for which the question is posted
Add an Answer
  POST /qa/questions/:question_id/answers
    Parameters
      question_id	integer	Required ID of the question to post the answer for
    Body Parameters
      body	text	Text of question being asked
      name	text	Username for question asker
      email	text	Email address for question asker
      photos	[text]	An array of urls corresponding to images to display
Mark Question as Helpful
  PUT /qa/questions/:question_id/helpful
    question_id	integer	Required ID of the question to update
Report Question
  PUT /qa/questions/:question_id/report
    question_id	integer	Required ID of the question to update
Mark Answer as Helpful
  PUT /qa/answers/:answer_id/helpful
    answer_id	integer	Required ID of the answer to update
Report Answer
  PUT /qa/answers/:answer_id/report
    answer_id	integer	Required ID of the answer to update

--------------------Questions & Answers--------------------
Get Cart
  GET /cart
Add to Cart
  POST /cart
    sku_id	int	ID for the product being added to the cart
