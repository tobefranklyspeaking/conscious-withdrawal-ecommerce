# portfolio-site

-------------------------------------------------------------------
| Overview
  | Product Information
    - Mostly static
      - get from API
      - component or parent
    - how to deal with varying # of attributes
  | Style Selector
    - click on new style
      - size and quantities update
      - images change
      - checkmark will change to selected style
      - get from api
-------------------------------------------------------------------
  | Add to Cart
    - Potential difficulty with logic around styles, sizes, num avail
      - show some error message or disable buttons if one is not selected
      - post req to cart
  | Image Gallery
    - Potential difficulty zoom with mouse
    - Potential difficulty dealing with diff between images
    - Many options for scrolling, zooming, etc
-------------------------------------------------------------------
| Ratings & Reviews
  | Reviews List
  | Individual Review Tile
  | Sort Options
    - Relevance - how does that come from api, how is it determined?
    - Helpfulness - how to easily calc? What if ppl go back and forth a lot? Caching?
      - if you click helpful while its sorted, does it automatically update ranking?
  | Rating Breakdown (Filtering)
    - Difficulties - agregating data options
    - What does the bar even mean?
    - Filtering data by star to populate reviews list
        - filter your data
        - what happens with non-integer stars? like 4.5
  | Product Breakdown (Factors)
    - Difficulties - getting the bars to show all of the data options - styling
  | Write New Review
    - after writing a review, where would you see it?
  | Keyword search - Low Priority
    - not shown in preview
    - does it filter reviews
    - does it highlight inline
-------------------------------------------------------------------
-Franks
| Questions & Answers
  | Questions List
    - By default how are these sorted - by helpfulness
  | Individual Question
    -
  | Search Questions
    - filtering that coincides with search
  | More Answered Questions
    -
  | Add a Question
    - shared modal
  | Add an Answer Modal
    - use shared modal
-------------------------------------------------------------------
| Related Items & Comparison
  | Related Product Cards
    -
  | List Behavior
    - CSS for fading out to right
  | Related Products List
    - How to determine what is related
    - comparison model may be difficult
  | Your Outfit List
    - clicking x remove from outfit using delete request
-------------------------------------------------------------------
| Shared
  | Stars Component
    - Overview, related items, ratings and reviews
  | Carosel Component
    - Overview, related items, comparison
  | Create modal
    - shared between all
    - use z-index to move pop up toward user
  | Search component
    - nav bar and Q&A
  | Helpful/Report Component
    - ratings and reviews, Q&A
  | More/Add Section - Also form
    - Q&A, ratings and reviews
  | Dropdown
    - Overview, ratings and reviews
