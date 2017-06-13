# my-pwp-shihlin
Personal website project showcasing my portfolio and resume

## Milestone 1 Feedback
Excellent work on defining the direction for your PWP. Your purpose, audience, goal(s), Persona and Use Case are all thoughtfully crafted and very well defined. You demonstrate a very high level of understanding 
regarding your chosen career trajectory and the interests and needs of the end-users you plan to target. I'm looking forward to seeing what content and UI design ideas you come up with in Milestone 2a, especially in regards to your areas of interest.

Your HTML looks great, and your project is set up according to specifications. Nice work. Your Milestone 1 passes at [Tier IV](https://bootcamp-coders.cnm.edu/projects/personal/rubric/). You're clear to begin work on [Milestone 2&alpha;](https://bootcamp-coders.cnm.edu/projects/personal/milestone-two/).

## Milestone 2&alpha; Feedback

Great job clearly outlining each section of your PWP, and matching the wireframe accordingly. I like the clean layout, and logical structure. I also like that you'll be showcasing some of your previous blog entries and articles. I think that'll show potential employers/clients that you're more than just a developer.

According to [W3 Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fbootcamp-coders.cnm.edu%2F~slu5%2Fmy-pwp-shihlin%2Fepic%2Fpublic_html%2Fdocumentation%2Fmilestone-2.php) you have no warnings or errors, which is awesome! However, I did notice that you left out an important piece of the HTML puzzle, which is: `<meta name="viewport" content="width=device-width, initial-scale=1">`. That `<meta>` tag is important for responsive development.

Overall your html is good and I think your PWP is going to come out looking great.

grade Tier IV - Great job! https://bootcamp-coders.cnm.edu/projects/personal/rubric/

## Milestone 2&beta; Feedback
Tier III

## Milestone 3 / Final PWP Evaluation
You've done a remarkable job on creating a beautiful personal website. I especially love your choice of typography for your name - so cool. I know that you're not pleased overall with the current design that I'm evaluating, but overall you have done a good job implementing a challenging design, and this is a great beginning with front end development. As developers and designers, we will always look back at past work and see room for improvement, so keep building things!

You challenged yourself with an ambitious design, and the use of several tricky jQuery plugins - and that's a worthy undertaking. It's always tricker to implement and troubleshoot other people's code than it is to implement and debug our own. There are some minor issues with the layout that need to be ironed out - especially getting that animation canvas to fit right... there are just a few minor tweaks to your CSS that can be made to make those scrollbars go away.

_As of right now, your contact form is not working because the `mailer.php` file cannot be found_, and there are some issues with your dependencies (**Your jQuery has been commented out!**) too. See Edits &amp; Suggestions below for a run-down of the errors I'm seeing and how to fix them.

Another suggestion is that I don't think I would allocate so much empty space around such minimal content. I would also consider making the navbar hover text a bit larger, and ensure consitency with the padding across the content sections.

Overall, you've challenged yourself beyond what the average student attempts for PWP, and I hope that this has been a valuable learning experience for you. Your Milestone 3/Final Delivery for PWP passes at [Tier II](https://bootcamp-coders.cnm.edu/projects/personal/rubric/).

Your overall passing grade across all of your PWP Milestones is [29/40 points (72.5%)](https://bootcamp-coders.cnm.edu/projects/personal/rubric/#sample-score).

- Milestone 1 - 20%: Tier IV 40(0.2) = 8
- Milestone 2a - 20%: Tier IV 40(0.2) = 8
- Milestone 2b - 10%: Tier III 30(0.1) = 3
- Milestone 3 - 50%: Tier II 20(0.5) = 10

## Edits &amp; Suggestions
- jQuery has been commented out on line 21. This is preventing your contact form from working, as it is required for the form validation and AJAX submit.
- Move your /php directory inside /public_html. You will also need to update the path in your `action` attribute. Right now it doesn't look like the mailer file is found on the server either. Check that all your files are uploaded to the right location.
- Apply the following CSS rules to fix your animation section:
```
#section1 {
  position: relative;
  overflow: hidden;
}
```
- The Bootstrap column classes are mistyped on lines 133 and 147. This is messing up the grid system. 
- I recommend having any external links open in a new tab. (The link in your Writing section). This can be done by using the `target="_blank"` attribute on your <a> tag.
- It looks like your mobile nav button doesn't work - this really hurts the UX. I am willing to bet this has to do with jQuery being commented out. Otherwise your mobile layout is working ok.
- I see some SASS files in your project too... were those copied in from the plugins, or did you implement SASS in this project?
- I would remove any files that came with the plugins that are not currently being used in your project.
- The Pi Mirror picture is a little bit too big in my opinion. It took a sec to load on mobile, and I see it's over 1MB in size. I would size it down to less than 500kb.
