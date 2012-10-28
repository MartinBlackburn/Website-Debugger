#Website Debugger

Collection of CSS and JavaScript to help detect possible errors on website.

These debugging tools should not be relied upon, they are here to aid your usual checks, like validating your markup.

##CSS

####Red errors
Images without alt text  
Links without a href  
Lists with child elements that aren't li's  
Forms without method or action  
Inputs without name  
Inputs without type  
Submit input without a value

####Yellow errors
Empty elements, except for textareas, inputs and a element with 'clear' as a class.  
Images with empty alt text  
Links with empty href  
Links with href of '#' or containing 'javascript'  
Forms with emprty method  
Elements with inlines styles as these should be avioded where possible  
Elements with IDs as these shouldn't be used in CSS