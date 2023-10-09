# Shopping Cart Notes

Here is where I will keep a log of this project's progress. 

## Assignment:

1.  Create a new React project.
2.  Think about the component and the folder structure. How could you set up your application? Which components or functionalities do you need? It's a good idea to note this down somewhere you can easily get to and refer back and add to it to keep track.
3.  You should have at least two pages (a home page and a shop page, which includes your shopping cart). Let the user navigate between the pages with a navigation bar, which will be shown on both pages.
4.  To your homepage, you can add whatever you'd like! A few images or information will be totally fine; it doesn't have to be something fancy - it's to test the concepts taught thus far.
5.  On the shopping cart page, you should have the same navigation bar that displays the number of items currently in the cart. You should also have a button next to it where you can go to the cart to checkout and pay (however we are not going to implement this logic here).
6.  Build individual card elements for each of your products. Display an input field on it, which lets a user manually type in how many items they want to buy. Also, add an increment and decrement button next to it for fine-tuning. You can also display a title for each product as well as an "Add To Cart" button.
7.  Fetch your shop items from [FakeStore API](https://fakestoreapi.com) or something similar.
8.  Once a user has submitted their order, the amount on the cart itself should adjust accordingly.
9.  Make sure to test your app thoroughly using the React Testing Library. Be careful not to test `react-router-dom` directly, since it is an external library and the developers working on it must have tested the library already.
10. As usual, style your application so you can show it off! You have a host of options provided already.
11. Lastly, it's time to deploy it! Depending on what hosting solution you're using, you may need some additional configuration so that your routing is handled correctly as a single page application (SPA). *removed instructions on deploying*

## Notes on Assignment before starting the project:

1. ✅ [completed](#2023-10-09) 
2. I am thinking about the following components
    - main app
    - header which includes a shopping cart icon, link to homepage and link to shop 
    - data fetcher
    - shopping cart page (could perhaps be implemented on the shop page reading those instructions)
    - shop page
      - includes cards for each product
    - card component for each product
      - should have an input field for number of items, and buttons to increase/decrease
    - home page
    - footer
    
    Before starting this, I believe it would make sense to keep the header and footer in place throughout, and the main section should change based on current link. 
3. covered in the above. 
4. Homepage could be a fancy introduction to the shop I will pick. It would be nice to include a few hot selling items perhaps, or a call to action like "shop now". I probably want to gather some inspiration for this on real shopping sites. 
5. covered in point 2. This makes me think the shopping cart should indeed have it's own page to make most sense. You could probably technically have a state and conditionally render it from the shop, but I'd rather keep those separate and have every item, be added to cart on add-to-cart action
6. added to number 2 (input field for amount of items)
7. Find possible API's online to use for this. At first thought, just as with memory card, this really makes me want to build my own API, but that would be a new rabbit hole that should probably wait until I reach that section. 
8. This makes me believe the cart item in the header section should be a component inside the header. This way we don't have to re-render the whole header component. 
9. "Be careful not to test `react-router-dom` directly" comment makes me wonder why this was put in here. I should probably find out if this is a common mistake or something. I am assuming I should test for components rendering, shopping cart updating amount, and updated amount updating/rendering in the header section as well. 
10. I have no styling ideas yet and will gather inspiration for it once the main functionality is implemented. I am intending to make it a pretty basic but sleek or fashionable site. I do not want to spend too much time on styling. I have learned about styling components and CSS in JS so might try to implement this here after using TailWind for the past few projects. 
11. Not applicable right now. I'll probably stick to Vercel but I'll look at this once I'm ready to deploy. 

## 2023-10-09
- set up my React project with Vite. 
- [ ] find and keep track of available API's I could use for this project
- [ ] go through the `React Testing Library` docs and review testing section as needed