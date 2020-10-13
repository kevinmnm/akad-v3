//content = JS || Vue || CSS

let contents = [
   {
      topic: 'True/False Boolean Behaviors',
      show: true,
      selected: false,
      uniqueIdMatch: 'z71',
      date: '07/01/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'There are some important boolean behaviors to be aware of in JavaScript. Let\'s look at some coercive comparison and see what outputs true or false.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="&lt;JS&gt; True/False Behavior" src="https://codepen.io/kevinmnm/embed/WNrWJWz?height=332&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/WNrWJWz'>&lt;JS&gt; True/False Behavior</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Mouse Events (page, client, and offset)',
      show: true,
      selected: false,
      uniqueIdMatch: 'z72',
      date: '07/02/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'JavaScript offers 3 different mouse events: (e.pageX & e.pageY), (e.clientX & e.clientY), (e.offsetX, e.offsetY). The "page" gets mouse position relative to the whole page. The "client" get mouse position relative to the current viewport. The "offset" gets mouse position relative to (inside of) the current element.',
      referenceLink1: 'https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_mouse_pagexy',
      referenceLink2: 'https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_mouse_screenxy_clientxy',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="Mouse Events" src="https://codepen.io/kevinmnm/embed/VweNdjm?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/VweNdjm'>Mouse Events</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Arrow Functions Syntax',
      show: true,
      selected: false,
      uniqueIdMatch: 'z73',
      date: '07/03/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'There are many ways to write same function syntax. With arrow function, you can write less code and do the same work. It it a good idea to review arrow syntax for future learning as not all documentation is written in traditional syntax.',
      referenceLink1: 'https://www.w3schools.com/js/js_arrow_function.asp',
      referenceLink2: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="Arrow Functions" src="https://codepen.io/kevinmnm/embed/qBbGWZO?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/qBbGWZO'>Arrow Functions</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: '"filter()" method for JS array',
      show: true,
      selected: false,
      uniqueIdMatch: 'z74',
      date: '07/04/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'filter() is a method to filter out certain value from array. You can filter directly from the array (example below) or create a separate reusable function (refer to reference link).',
      referenceLink1: 'https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_filter',
      referenceLink2: 'https://www.w3schools.com/jsref/jsref_filter.asp',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="Array filter() Method" src="https://codepen.io/kevinmnm/embed/rNxgYow?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/rNxgYow'>Array filter() Method</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Vue Props Example (Simple)',
      show: true,
      selected: false,
      uniqueIdMatch: 'z75',
      date: '07/05/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: 'Vue props quick and simple example. Props can be used to render different values within components. It is important to follow correct syntax to avoid any erros, which can be very annoying. Below example shows how props can be used to render different value in loops.',
      referenceLink1: 'https://vuejs.org/v2/guide/components-props.html',
      referenceLink2: 'https://vueschool.io/lessons/reusable-components-with-props?friend=vuejs',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="Vue Props Example (Simple)" src="https://codepen.io/kevinmnm/embed/WNrBJPE?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/WNrBJPE'>Vue Props Example (Simple)</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Pushing Object Into Array',
      show: true,
      selected: false,
      uniqueIdMatch: 'z76',
      date: '07/06/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'Using push() method, object (JSON form) can be pushed into array.',
      referenceLink1: 'https://stackoverflow.com/questions/40250139/push-object-into-array',
      referenceLink2: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="Pushing object form into array" src="https://codepen.io/kevinmnm/embed/mdVZVKd?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/mdVZVKd'>Pushing object form into array</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'New-line (white-space) Property',
      show: true,
      selected: false,
      uniqueIdMatch: 'z77',
      date: '07/07/2020',
      content: 'CSS',
      mdi: 'mdi-language-css3',
      name: 'CSS',
      description: 'When the new-line character "\\n" doesn\'t work, there is a go-around solution in CSS.',
      referenceLink1: 'https://www.w3schools.com/cssref/pr_text_white-space.asp',
      referenceLink2: 'https://css-tricks.com/almanac/properties/w/whitespace/',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="CSS White-Space Property" src="https://codepen.io/kevinmnm/embed/xxZogRR?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/xxZogRR'>CSS White-Space Property</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Event Bubbling & Capturing',
      show: true,
      selected: false,
      uniqueIdMatch: 'z78',
      date: '07/08/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'Differences between Event Bubbling and Event Capturing.',
      referenceLink1: 'https://www.w3schools.com/jsref/met_element_addeventlistener.asp',
      referenceLink2: 'https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="Event Bubbling &amp; Capturing" src="https://codepen.io/kevinmnm/embed/jOWjyag?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/jOWjyag'>Event Bubbling &amp; Capturing</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Event Modifiers',
      show: true,
      selected: false,
      uniqueIdMatch: 'z79',
      date: '07/09/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: `There are several (in-line) Event Modifiers in Vue: 
           - .stop          // stopPropagation().
           - .prevent     // preventDefault().
           - .capture     // Event Capturing.
           - .self           // Trigger event to self (similar to event capture)
           - .once         // Only trigger once.
           - .passive     // Used to improve scrolling events.
           `,
      referenceLink1: 'https://vuejs.org/v2/guide/events.html#Event-Modifiers',
      referenceLink2: 'https://www.digitalocean.com/community/tutorials/vuejs-events',
      codepenEmbed: `No codepen.io example available for this content. <br><br><img src='img/event_modifiers.png' alt='screenshot'></img>`
   },
   {
      topic: 'Key Modifiers',
      show: true,
      selected: false,
      uniqueIdMatch: 'z710',
      date: '07/10/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: 'Vue offers key modifiers to easily bind keyboard shorcut with functions.',
      referenceLink1: 'https://vuejs.org/v2/guide/events.html#Key-Modifiers',
      referenceLink2: 'https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values',
      codepenEmbed: `No codepen.io example available for this content. <br><br><img src='img/key_modifiers.png' alt='screenshot'></img>`
   },
   {
      topic: '$emit Method',
      show: true,
      selected: false,
      uniqueIdMatch: 'z711',
      date: '07/11/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: 'To clarify the confusion I had regarding $emit in Vue, $emit is used from component to manipulate data declared in instance. Value that\'s being passed by $emit is called "payload". Payload can be retrieved by parent (instance) with $event parameter. [Prior to Vue 3] In order to pass payload to grand parent component, you must declare "$listeners" in connecting component.',
      referenceLink1: 'https://vuejs.org/v2/guide/components.html#Listening-to-Child-Components-Events',
      referenceLink2: 'https://vuejs.org/v2/guide/components-custom-events.html',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="$emit Method" src="https://codepen.io/kevinmnm/embed/OJMeBZj?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/OJMeBZj'>$emit Method</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Draggable & Nested Function',
      show: true,
      selected: false,
      uniqueIdMatch: 'z712',
      date: '07/12/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'This is a click & drag app written in Vue.js but its concept that I\'m notating today is same for vanilla JS. \n\nWhen creating function for this type of app, I had a major bug where mouse will lose the element when I drag element fast enough. The end solution was "nested function". By using nested function instead of declaring each functions for each event (mousedown, mousemove, and mouseup), the performance was a lot smoother.',
      referenceLink1: 'https://www.w3schools.com/howto/howto_js_draggable.asp',
      referenceLink2: 'https://www.w3schools.com/code/tryit.asp?filename=GH0MIIQGSGEH',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="Draggable Divs &amp; Nested Function" src="https://codepen.io/kevinmnm/embed/MWKMLwV?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/MWKMLwV'>Draggable Divs &amp; Nested Function</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Async Await',
      show: true,
      selected: false,
      uniqueIdMatch: 'z713',
      date: '07/13/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'How to use async await method! Very important not only to use it for ajax request, but also for many different functions that needs to be executed in order!',
      referenceLink1: 'https://javascript.info/async-await',
      referenceLink2: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="Async Await" src="https://codepen.io/kevinmnm/embed/MWKMLQP?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/MWKMLQP'>Async Await</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Random Color Picker & Responsive Design',
      show: true,
      selected: false,
      uniqueIdMatch: 'z714',
      date: '07/14/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'Random color picking funciton and responsive design created with JavaScript. This will be a good reference for future projects.',
      referenceLink1: 'https://css-tricks.com/snippets/javascript/random-hex-color/',
      referenceLink2: '',
      codepenEmbed: `<iframe height="800" style="width: 100%;" scrolling="no" title="Random Color &amp; Responsive Design" src="https://codepen.io/kevinmnm/embed/rNxEPvR?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/rNxEPvR'>Random Color &amp; Responsive Design</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Slot',
      show: true,
      selected: false,
      uniqueIdMatch: 'z715',
      date: '07/15/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: 'Slot "<slot></slot>" can be declared in compoent template if you want to use custom component like regular HTML. See example code below for further clarification.',
      referenceLink1: 'https://vuejs.org/v2/guide/components.html#Content-Distribution-with-Slots',
      referenceLink2: 'https://vuejs.org/v2/guide/components-slots.html',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="Slot in Vue" src="https://codepen.io/kevinmnm/embed/vYLqPLJ?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/vYLqPLJ'>Slot in Vue</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'HTML new "is" attribute',
      show: true,
      selected: false,
      uniqueIdMatch: 'z716',
      date: '07/16/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: '"is" attribute is a new HTML attribute implemented in 2020. This attribute is used in the Custom Element specification.',
      referenceLink1: 'https://stackoverflow.com/questions/27434431/what-is-html-is-attribute#:~:text=In%202020%3A,documented%20for%20developers%20at%20mdn.',
      referenceLink2: 'https://www.w3.org/TR/2016/WD-custom-elements-20161013/#attr-is',
      codepenEmbed: `No codepen.io example available for this content.<br><br><img src='img/is_attribute.png' alt='is attribute image' />`
   },
   {
      topic: 'CSS calc() Function',
      show: true,
      selected: false,
      uniqueIdMatch: 'z717',
      date: '07/17/2020',
      content: 'CSS',
      mdi: 'mdi-language-css3',
      name: 'CSS',
      description: 'CSS calc() is a very useful function when creating responsive website design. This flexible function will help reduce size of JavaScript file to maintain the site responsive',
      referenceLink1: 'https://css-tricks.com/a-complete-guide-to-calc-in-css/',
      referenceLink2: 'https://developer.mozilla.org/en-US/docs/Web/CSS/calc',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="CSS calc()" src="https://codepen.io/kevinmnm/embed/wvMVzML?height=265&theme-id=dark&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/wvMVzML'>CSS calc()</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Vue <keep-alive> Built-In Component',
      show: true,
      selected: false,
      uniqueIdMatch: 'z718',
      date: '07/18/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: 'After destroying component or instance, web memory will be erased and reset the previous status of the element. <keep-alive> can come in handy when you want to archive the element\'s status. \n\nNote: This is not localStorage.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `No codepen.io example available for this content.<br><br><img src='img/keep_alive.png' alt='keep_alive image 1' /><img src='img/keep_alive2.png' alt='keep_alive image 2' />`
   },
   {
      topic: 'Nested Components + More!',
      show: true,
      selected: false,
      uniqueIdMatch: 'z719',
      date: '07/19/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: 'Please refer to code and fully comprehend it!',
      referenceLink1: 'https://vuejs.org/v2/guide/components-props.html',
      referenceLink2: 'https://vuejs.org/v2/guide/components-edge-cases.html',
      codepenEmbed: `<iframe height="650" style="width: 100%;" scrolling="no" title="Advancing Vue" src="https://codepen.io/kevinmnm/embed/yLemXNZ?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/yLemXNZ'>Advancing Vue</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Vue Async Await!',
      show: true,
      selected: false,
      uniqueIdMatch: 'z720',
      date: '07/20/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: 'Sometimes Vue forces functions to work little differently from JavaScript. Async Await is one of them. This learning content will provide good examples of how I should write async await function in Vue especially within component with props implementation.',
      referenceLink1: 'https://javascript.info/async-await',
      referenceLink2: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="Vue Async Await" src="https://codepen.io/kevinmnm/embed/jOWgeyL?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/jOWgeyL'>Vue Async Await</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Complicated Component Usage & Array Iterations',
      show: true,
      selected: false,
      uniqueIdMatch: 'z721',
      date: '07/21/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: 'PLEASE LOOK OVER THIS CONTENT MULTIPLE TIME TO GET COMFORTABLE. This content took whole day for me write. Complicated Vue component usage was utilized. Some JavaScript arry iterations are noted as well.',
      referenceLink1: 'https://www.w3schools.com/js/js_array_iteration.asp',
      referenceLink2: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="Advanced Component Usage &amp; Array Iterations" src="https://codepen.io/kevinmnm/embed/rNeBVKq?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/rNeBVKq'>Advanced Component Usage &amp; Array Iterations</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Dynamic Arguments',
      show: true,
      selected: false,
      uniqueIdMatch: 'z722',
      date: '07/22/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: 'Dynamic arugument is a way to bind HTML property as needed. Documentation below will provide clear explanation.',
      referenceLink1: 'https://vuejs.org/v2/guide/syntax.html#Dynamic-Arguments',
      referenceLink2: 'https://vuejs.org/v2/guide/custom-directive.html',
      codepenEmbed: `No codepen.io example available for this content. <br><br><img src='img/dynamic_arguments.png' alt='screenshot'></img>`
   },
   {
      topic: 'Simple Shortcut Function',
      show: true,
      selected: false,
      uniqueIdMatch: 'z723',
      date: '07/23/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'Very simple shortcut function (multiple keys) demonstrated with JS.',
      referenceLink1: 'https://www.w3schools.com/jsref/event_onkeydown.asp',
      referenceLink2: 'https://keycode.info/',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="Simple Shortcut Function" src="https://codepen.io/kevinmnm/embed/QWNLmeo?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/QWNLmeo'>Simple Shortcut Function</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Classes',
      show: true,
      selected: false,
      uniqueIdMatch: 'z724',
      date: '07/24/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'Class is an important method in JavaScript especially for advanced level developers. Class is syntax sugar for _prototype_.',
      referenceLink1: 'https://www.w3schools.com/js/js_object_classes.asp',
      referenceLink2: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes',
      codepenEmbed: `<iframe height="900" style="width: 100%;" scrolling="no" title="JS Class basic" src="https://codepen.io/kevinmnm/embed/xxVxxNV?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/xxVxxNV'>JS Class basic</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Rest Parameter (...args)',
      show: true,
      selected: false,
      uniqueIdMatch: 'z725',
      date: '07/25/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'When having long list of array, rest parameter will come in very handy.',
      referenceLink1: 'https://www.geeksforgeeks.org/javascript-rest-operator/',
      referenceLink2: 'https://www.javascripttutorial.net/es6/javascript-rest-parameters/',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="Rest Parameter (...args)" src="https://codepen.io/kevinmnm/embed/ExKxjJG?height=265&theme-id=dark&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/ExKxjJG'>Rest Parameter (...args)</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Heartbeat Animation Review',
      show: true,
      selected: false,
      uniqueIdMatch: 'z726',
      date: '07/26/2020',
      content: 'CSS',
      mdi: 'mdi-language-css3',
      name: 'CSS',
      description: 'This animation content reviews transform, tranform-origin, :before, :after, scale, and rotate.',
      referenceLink1: 'https://www.w3schools.com/css/css3_animations.asp',
      referenceLink2: 'https://css-tricks.com/almanac/properties/t/transform-origin/',
      codepenEmbed: `<iframe height="500" style="width: 100%;" scrolling="no" title="CSS Heartbeat" src="https://codepen.io/kevinmnm/embed/yLOLjWO?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/yLOLjWO'>CSS Heartbeat</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Vue & Animate.css',
      show: true,
      selected: false,
      uniqueIdMatch: 'z727',
      date: '07/27/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: 'Vue transition can be combined with Animate.css.',
      referenceLink1: 'https://vuejs.org/v2/guide/transitions.html#Transition-Classes',
      referenceLink2: 'https://css-tricks.com/intro-to-vue-5-animations/',
      codepenEmbed: `No codepen.io example available for this content. <br><br><img src='img/transition_animate.png' alt='screenshot'></img>`
   },
   {
      topic: 'Transition Basics',
      show: true,
      selected: false,
      uniqueIdMatch: 'z728',
      date: '07/28/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: 'Vue transition implementation quick reference.',
      referenceLink1: 'https://vuejs.org/v2/guide/transitions.html',
      referenceLink2: 'https://css-tricks.com/intro-to-vue-5-animations/',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="Vue Transition Basic" src="https://codepen.io/kevinmnm/embed/PoNwmQM?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/PoNwmQM'>Vue Transition Basic</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Clarifying setInterval() Behavior',
      show: true,
      selected: false,
      uniqueIdMatch: 'z729',
      date: '07/29/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'Let\'s review on JS return behavior especially with setInterval or setTimeout.',
      referenceLink1: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return',
      referenceLink2: 'https://www.w3schools.com/jsref/jsref_return.asp',
      codepenEmbed: `<iframe height="750" style="width: 100%;" scrolling="no" title="JS setInterval return Test" src="https://codepen.io/kevinmnm/embed/XWdJyqo?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/XWdJyqo'>JS setInterval return Test</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Debouncing Function!',
      show: true,
      selected: false,
      uniqueIdMatch: 'z730',
      date: '07/30/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'Debouncing is an effective method to prevent events to repeat multiple times especially with queued calls.',
      referenceLink1: 'https://www.w3schools.com/code/tryit.asp?filename=GHIXM13TJSVY',
      referenceLink2: 'https://javascript.info/task/debounce',
      codepenEmbed: `<iframe height="500" style="width: 100%;" scrolling="no" title="Debouncing Function!" src="https://codepen.io/kevinmnm/embed/vYGEveJ?height=265&theme-id=dark&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/vYGEveJ'>Debouncing Function!</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: '[transition-group]!',
      show: true,
      selected: false,
      uniqueIdMatch: 'z731',
      date: '07/31/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: 'This is a very important topic!',
      referenceLink1: 'https://vuejs.org/v2/guide/transitions.html#List-Entering-Leaving-Transitions',
      referenceLink2: 'https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php',
      codepenEmbed: `<iframe height="850" style="width: 100%;" scrolling="no" title="Vue &lt;transition-group&gt; overview!" src="https://codepen.io/kevinmnm/embed/JjXoxoJ?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/JjXoxoJ'>Vue &lt;transition-group&gt; overview!</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: '[for in] vs [for of]',
      show: true,
      selected: false,
      uniqueIdMatch: 'z81',
      date: '08/01/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'New for loop methods introduced in ES6: [for in] and [for of]. [for in] returns enumerable properties. [for of] returns iterable properties.',
      referenceLink1: 'https://www.w3schools.com/jsref/jsref_forin.asp',
      referenceLink2: 'https://www.w3schools.com/jsref/jsref_forof.asp',
      codepenEmbed: `<iframe height="650" style="width: 100%;" scrolling="no" title="Enumerables &amp; Iterables" src="https://codepen.io/kevinmnm/embed/wvGaqYx?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/wvGaqYx'>Enumerables &amp; Iterables</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Saving Props Value to Data!',
      show: true,
      selected: false,
      uniqueIdMatch: 'z82',
      date: '08/02/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: 'There\'s an effective way to save props passed from parent to child\'s data. However, this methods is NOT reactive! However, you ca fix it with computed data.',
      referenceLink1: 'https://www.w3schools.com/code/tryit.asp?filename=GHNCA53X63A0',
      referenceLink2: 'https://vuejs.org/v2/api/#props',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="Vue Passing Props Value to Child's Data!" src="https://codepen.io/kevinmnm/embed/ZEWbXqO?height=265&theme-id=dark&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/ZEWbXqO'>Vue Passing Props Value to Child's Data!</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Import/Export Function Syntax',
      show: true,
      selected: false,
      uniqueIdMatch: 'z83',
      date: '08/03/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: 'Vue helper function "this" breaks if not following specific syntax.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `No codepen.io example available for this content. <br><br><img src='img/import_function_2.png' alt='screenshot' /><br><img src='img/import_function_1.png' alt='screenshot' />`
   },
   {
      topic: 'Vue CLI Structure Overview (Router)',
      show: true,
      selected: false,
      uniqueIdMatch: 'z84',
      date: '08/04/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: 'Vue CLI will auto generate boiler plate, but it\'s important to understand connections between files for smooth coding experience. Quick overview below that includes Vue Router.',
      referenceLink1: 'https://router.vuejs.org/',
      referenceLink2: 'https://router.vuejs.org/guide/essentials/dynamic-matching.html#reacting-to-params-changes',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="Vue CLI Structure (Router)" src="https://codepen.io/kevinmnm/embed/XWddLxR?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/XWddLxR'>Vue CLI Structure (Router)</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Vue Dynamic Route Matching',
      show: true,
      selected: false,
      uniqueIdMatch: 'z85',
      date: '08/05/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: 'Params in Vue routing offers further reduction in refreshing content by detecting params change and only re-rendering necessary content instead of reloading whole component. See simple exmaple from github from link below.',
      referenceLink1: 'https://router.vuejs.org/guide/essentials/dynamic-matching.html',
      referenceLink2: 'https://github.com/kevinmnm/dynamic_route_match_simple.git',
      codepenEmbed: `No codepen.io example available for this content. <br><br><img src='img/dynamic_route1.png' alt='screenshot' /><br><img src='img/dynamic_route2.png' alt='screenshot' />`
   },
   {
      topic: 'Vue Watch Properties',
      show: true,
      selected: false,
      uniqueIdMatch: 'z86',
      date: '08/06/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: 'Vue has watch properties that can be declared as an object to alter its defaul behavior. This can be very useful especially to avoid declaring same function in mounted() and watch().',
      referenceLink1: 'https://vuejs.org/v2/api/#watch',
      referenceLink2: 'https://stackoverflow.com/questions/52637936/vuejs-skip-watchers-first-change',
      codepenEmbed: `<iframe height="650" style="width: 100%;" scrolling="no" title="Vue Watch Properties" src="https://codepen.io/kevinmnm/embed/LYNZKdL?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/LYNZKdL'>Vue Watch Properties</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'RegExp Quick Guide',
      show: true,
      selected: false,
      uniqueIdMatch: 'z87',
      date: '08/07/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'Not used very often but something to be aware of.',
      referenceLink1: 'https://www.w3schools.com/jsref/jsref_obj_regexp.asp',
      referenceLink2: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="RegExp" src="https://codepen.io/kevinmnm/embed/yLOaBKx?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/yLOaBKx'>RegExp</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Firebase Useful commands',
      show: true,
      selected: false,
      uniqueIdMatch: 'z88',
      date: '08/08/2020',
      content: 'Firebase',
      mdi: 'mdi-firebase',
      name: 'Firebase',
      description: 'Most basic Firebase JS commands to remember',
      referenceLink1: 'https://firebase.google.com/docs/auth/web/password-auth',
      referenceLink2: 'https://firebase.google.com/docs/reference/js/firebase.auth?authuser=0',
      codepenEmbed: `<iframe height="650" style="width: 100%;" scrolling="no" title="Firebase Useful Commands" src="https://codepen.io/kevinmnm/embed/mdPRgQG?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/mdPRgQG'>Firebase Useful Commands</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Firebase Create Display ID On Signup',
      show: true,
      selected: false,
      uniqueIdMatch: 'z89',
      date: '08/09/2020',
      content: 'Firebase',
      mdi: 'mdi-firebase',
      name: 'Firebase',
      description: 'Quick note on chaining Firebase methods to simultaneously create credentials and preferred display name.',
      referenceLink1: 'https://stackoverflow.com/questions/40389946/how-do-i-set-the-displayname-of-firebase-user/40429080',
      referenceLink2: 'https://firebase.google.com/docs/auth/web/manage-users',
      codepenEmbed: `<iframe height="650" style="width: 100%;" scrolling="no" title="Firebase Create Display ID On Signup" src="https://codepen.io/kevinmnm/embed/WNwjZRV?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/WNwjZRV'>Firebase Create Display ID On Signup</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Firebase Firestore Quick Guide',
      show: true,
      selected: false,
      uniqueIdMatch: 'z810',
      date: '08/10/2020',
      content: 'Firebase',
      mdi: 'mdi-firebase',
      name: 'Firebase',
      description: 'Firestore allows data to be stored in Firebase database.',
      referenceLink1: 'https://www.youtube.com/watch?v=d0RK2bpRVgo',
      referenceLink2: 'https://firebase.google.com/docs/firestore',
      codepenEmbed: `<iframe height="650" style="width: 100%;" scrolling="no" title="Firestore Basic Guide" src="https://codepen.io/kevinmnm/embed/OJNgyWP?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/OJNgyWP'>Firestore Basic Guide</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Firebase + Vue Router',
      show: true,
      selected: false,
      uniqueIdMatch: 'z811',
      date: '08/11/2020',
      content: 'Firebase',
      mdi: 'mdi-firebase',
      name: 'Firebase',
      description: 'Important overview of combining Vue Router with Firebase. Plus method of sending verification email upon signup and Route Guarding depending on if user is logged in or not.',
      referenceLink1: 'https://github.com/kevinmnm/ini_travel_website',
      referenceLink2: 'https://firebase.google.com/docs/auth/web/email-link-auth',
      codepenEmbed: `<iframe height="700" style="width: 100%;" scrolling="no" title="bGpRwaL" src="https://codepen.io/kevinmnm/embed/bGpRwaL?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/bGpRwaL'>bGpRwaL</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Firestore Overview',
      show: true,
      selected: false,
      uniqueIdMatch: 'z812',
      date: '08/12/2020',
      content: 'Firebase',
      mdi: 'mdi-firebase',
      name: 'Firebase',
      description: 'Imortant Firestore basics to remember!',
      referenceLink1: 'https://firebase.google.com/docs/firestore/query-data/get-data',
      referenceLink2: 'https://stackoverflow.com/questions/46590155/firestore-permission-denied-missing-or-insufficient-permissions',
      codepenEmbed: `<iframe height="750" style="width: 100%;" scrolling="no" title="YzqQmxw" src="https://codepen.io/kevinmnm/embed/YzqQmxw?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/YzqQmxw'>YzqQmxw</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Vue CLI + Github Pages',
      show: true,
      selected: false,
      uniqueIdMatch: 'z813',
      date: '08/13/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'Some setup to keep in mind when integrating Vue CLI with Github Pages.',
      referenceLink1: 'https://cli.vuejs.org/config/#configuration-reference',
      referenceLink2: 'https://cli.vuejs.org/guide/deployment.html#deployment',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="Vue CLI + Github Pages" src="https://codepen.io/kevinmnm/embed/VwazroO?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/VwazroO'>Vue CLI + Github Pages</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: '.htaccess & Vue Router History Mode',
      show: true,
      selected: false,
      uniqueIdMatch: 'z814',
      date: '08/14/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: 'Must add .htaccess file in the root folder when using Vue Router History mode!',
      referenceLink1: 'https://mediatemple.net/community/products/dv/204643270/using-.htaccess-rewrite-rules',
      referenceLink2: 'https://help.dreamhost.com/hc/en-us/articles/215747748-How-can-I-redirect-and-rewrite-my-URLs-with-an-htaccess-file-',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title=".htaccess &amp; Vue Router History Mode" src="https://codepen.io/kevinmnm/embed/ZEWJdWO?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/ZEWJdWO'>.htaccess &amp; Vue Router History Mode</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'JS Conventions: $() and _',
      show: true,
      selected: false,
      uniqueIdMatch: 'z815',
      date: '08/15/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: '$ and _ are some conventional identifier among developers.',
      referenceLink1: 'https://www.thoughtco.com/and-in-javascript-2037515',
      referenceLink2: 'https://jaredmcateer.com/2017/09/significance-of-the-underscore-parameter-in-arrow-functions/',
      codepenEmbed: `<iframe height="700" style="width: 100%;" scrolling="no" title="ExKbVrv" src="https://codepen.io/kevinmnm/embed/ExKbVrv?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/ExKbVrv'>ExKbVrv</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Data Attribute',
      show: true,
      selected: false,
      uniqueIdMatch: 'z816',
      date: '08/16/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'Using data attribute can help manage elements with unique values.',
      referenceLink1: 'https://www.w3schools.com/tags/att_global_data.asp',
      referenceLink2: 'https://www.w3schools.com/jsref/met_element_getattribute.asp',
      codepenEmbed: `<iframe height="500" style="width: 100%;" scrolling="no" title="mdPqVRN" src="https://codepen.io/kevinmnm/embed/mdPqVRN?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/mdPqVRN'>mdPqVRN</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Vuex Syntax To Remember',
      show: true,
      selected: false,
      uniqueIdMatch: 'z817',
      date: '08/17/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: 'Some aspects in Vuex is worth to just memorize rather than Googling each time.',
      referenceLink1: 'https://www.youtube.com/watch?v=_2_C9j-8CtM&ab_channel=VueMastery',
      referenceLink2: 'https://vuex.vuejs.org/guide/',
      codepenEmbed: `<iframe height="700" style="width: 100%;" scrolling="no" title="Vuex Syntax" src="https://codepen.io/kevinmnm/embed/RwajamL?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/RwajamL'>Vuex Syntax</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Vuex CLI File Arrangement',
      show: true,
      selected: false,
      uniqueIdMatch: 'z818',
      date: '08/18/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: 'Vue CLI file organization idea.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="700" style="width: 100%;" scrolling="no" title="Vue CLI Files Organizing" src="https://codepen.io/kevinmnm/embed/XWdzMdz?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/XWdzMdz'>Vue CLI Files Organizing</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Vuex Store State',
      show: true,
      selected: false,
      uniqueIdMatch: 'z819',
      date: '08/19/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: 'Basics of state to always remember.',
      referenceLink1: 'https://vuex.vuejs.org/guide/state.html#state',
      referenceLink2: 'https://vuejs.org/v2/guide/computed.html#Computed-Properties',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="OJNOarq" src="https://codepen.io/kevinmnm/embed/OJNOarq?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/OJNOarq'>OJNOarq</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Vuex Store Getters',
      show: true,
      selected: false,
      uniqueIdMatch: 'z820',
      date: '08/20/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: 'Important information to remember on state.',
      referenceLink1: 'https://vuex.vuejs.org/guide/getters.html#getters',
      referenceLink2: 'https://www.youtube.com/watch?v=OtLRQdjmFvs',
      codepenEmbed: `<iframe height="650" style="width: 100%;" scrolling="no" title="Vuex Store Getters" src="https://codepen.io/kevinmnm/embed/ExKbGjw?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/ExKbGjw'>Vuex Store Getters</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'window.opener',
      show: true,
      selected: false,
      uniqueIdMatch: 'z821',
      date: '08/21/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'Something that I thought it was kind of interesting...',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="500" style="width: 100%;" scrolling="no" title="window.opener" src="https://codepen.io/kevinmnm/embed/JjXOzYK?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/JjXOzYK'>window.opener</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Destructuring Array',
      show: true,
      selected: false,
      uniqueIdMatch: 'z822',
      date: '08/22/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'Learning basics before scrutinizing ES6 Destructuring for objects.',
      referenceLink1: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment',
      referenceLink2: 'https://www.youtube.com/watch?v=-vR3a11Wzt0&ab_channel=freeCodeCamp.org',
      codepenEmbed: `<iframe height="800" style="width: 100%;" scrolling="no" title="Deconstructuring Assignment" src="https://codepen.io/kevinmnm/embed/mdPqZmX?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/mdPqZmX'>Deconstructuring Assignment</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Destructuring Object',
      show: true,
      selected: false,
      uniqueIdMatch: 'z823',
      date: '08/23/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'JavaScript ES6 Destructuring method for object.',
      referenceLink1: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment',
      referenceLink2: 'https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/',
      codepenEmbed: `<iframe height="750" style="width: 100%;" scrolling="no" title="Destructuring Object" src="https://codepen.io/kevinmnm/embed/GRZyQEZ?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/GRZyQEZ'>Destructuring Object</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'React Basic Syntax',
      show: true,
      selected: false,
      uniqueIdMatch: 'z824',
      date: '08/24/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'Be aware that Babel must be used to compile JSX format.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="650" style="width: 100%;" scrolling="no" title="React Basic Syntax" src="https://codepen.io/kevinmnm/embed/GRZyGjp?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/GRZyGjp'>React Basic Syntax</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Rendering Component (Class)',
      show: true,
      selected: false,
      uniqueIdMatch: 'z825',
      date: '08/25/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'This should be a default method when declaring component in React as this is the only way to apply functions to make the component stateless.',
      referenceLink1: 'https://reactjs.org/docs/state-and-lifecycle.html',
      referenceLink2: 'https://create-react-app.dev/docs/importing-a-component/',
      codepenEmbed: `<iframe height="750" style="width: 100%;" scrolling="no" title="Rendering Component (Class)" src="https://codepen.io/kevinmnm/embed/MWyQYEj?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/MWyQYEj'>Rendering Component (Class)</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'setState Syntax (WRONG APPROACH)',
      show: true,
      selected: false,
      uniqueIdMatch: 'z826',
      date: '08/26/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'ALL OF BELOW EXAMPLES ARE INCORRECT APPROACH TO SET STATE!',
      referenceLink1: 'https://reactjs.org/docs/hooks-state.html',
      referenceLink2: 'https://reactjs.org/docs/state-and-lifecycle.html',
      codepenEmbed: `<iframe height="650" style="width: 100%;" scrolling="no" title="React Function Declaration" src="https://codepen.io/kevinmnm/embed/yLOvyWb?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/yLOvyWb'>React Function Declaration</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Primitive vs Reference Types',
      show: true,
      selected: false,
      uniqueIdMatch: 'z827',
      date: '08/27/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'Always keep in mind of primitive and reference types in JS.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="Primitive vs Reference Types" src="https://codepen.io/kevinmnm/embed/LYNdJoQ?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/LYNdJoQ'>Primitive vs Reference Types</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'React useState Hook (Basic)',
      show: true,
      selected: false,
      uniqueIdMatch: 'z828',
      date: '08/28/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'Important syntax to remember when declaring component with function.',
      referenceLink1: 'https://reactjs.org/docs/hooks-state.html',
      referenceLink2: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/13556164#content',
      codepenEmbed: `<iframe height="750" style="width: 100%;" scrolling="no" title="React useState Hook" src="https://codepen.io/kevinmnm/embed/bGpvJgQ?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/bGpvJgQ'>React useState Hook</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'React Props',
      show: true,
      selected: false,
      uniqueIdMatch: 'z829',
      date: '08/29/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'Quick syntax overview',
      referenceLink1: 'https://reactjs.org/docs/components-and-props.html',
      referenceLink2: 'https://reactjs.org/docs/render-props.html',
      codepenEmbed: `<iframe height="750" style="width: 100%;" scrolling="no" title="React Props" src="https://codepen.io/kevinmnm/embed/KKzRajG?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/KKzRajG'>React Props</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Archiving Previous State',
      show: true,
      selected: false,
      uniqueIdMatch: 'z830',
      date: '08/30/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'A way I figured out to preserve previous state and update specific value of state.',
      referenceLink1: 'https://reactjs.org/docs/state-and-lifecycle.html',
      referenceLink2: 'https://reactjs.org/docs/faq-state.html',
      codepenEmbed: `<iframe height="700" style="width: 100%;" scrolling="no" title="React Change Specific State Value" src="https://codepen.io/kevinmnm/embed/abNGJew?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/abNGJew'>React Change Specific State Value</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Passing Function as Props',
      show: true,
      selected: false,
      uniqueIdMatch: 'z831',
      date: '08/31/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'Passing function as a props down to child component quick note.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="React Passing Function as Props" src="https://codepen.io/kevinmnm/embed/vYGjZEB?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/vYGjZEB'>React Passing Function as Props</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Two Ways Data Binding',
      show: true,
      selected: false,
      uniqueIdMatch: 'z91',
      date: '09/01/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'React two-way data binding is simpler than Vue\'s emit method.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="750" style="width: 100%;" scrolling="no" title="React 2-way Binding" src="https://codepen.io/kevinmnm/embed/MWyGoGP?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/MWyGoGP'>React 2-way Binding</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'setState',
      show: true,
      selected: false,
      uniqueIdMatch: 'z92',
      date: '09/02/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'A right approach to alter partial state value.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="700" style="width: 100%;" scrolling="no" title="React setState" src="https://codepen.io/kevinmnm/embed/VwaxrLo?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/VwaxrLo'>React setState</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Deep & Shallow Copy (TLDR)',
      show: true,
      selected: false,
      uniqueIdMatch: 'z93',
      date: '09/03/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'Quick note to copy variables and avoid referencing.',
      referenceLink1: 'https://medium.com/javascript-in-plain-english/how-to-deep-copy-objects-and-arrays-in-javascript-7c911359b089',
      referenceLink2: 'https://stackoverflow.com/questions/39241046/deepcopy-in-react#:~:text=5%20Answers&text=You%20can%20use%20JSON.,you%20want%20to%20deeply%20copy.',
      codepenEmbed: `<iframe height="650" style="width: 100%;" scrolling="no" title="React Copy (METHODS)" src="https://codepen.io/kevinmnm/embed/GRZdeQq?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/GRZdeQq'>React Copy (METHODS)</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'React Lifecycle (Creation)',
      show: true,
      selected: false,
      uniqueIdMatch: 'z94',
      date: '09/04/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'React Lifecycles are only available in class-based components. Use "useEffect()" instead in functional-based components.',
      referenceLink1: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/13556264#overview',
      referenceLink2: 'https://reactjs.org/docs/state-and-lifecycle.html',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="React Lifecycle (Creation)" src="https://codepen.io/kevinmnm/embed/JjXZLwq?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/JjXZLwq'>React Lifecycle (Creation)</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'componentDidMount()',
      show: true,
      selected: false,
      uniqueIdMatch: 'z95',
      date: '09/05/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'React Lifecycles componentDidMount() usage.',
      referenceLink1: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/13556268#overview',
      referenceLink2: 'https://reactjs.org/docs/react-component.html#componentdidmount',
      codepenEmbed: `<iframe height="500" style="width: 100%;" scrolling="no" title="React componentDidMount()" src="https://codepen.io/kevinmnm/embed/MWyXVbO?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/MWyXVbO'>React componentDidMount()</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'React Lifecycle (Update)',
      show: true,
      selected: false,
      uniqueIdMatch: 'z96',
      date: '09/06/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'Quck overview of React lifecycle upon props or state update.',
      referenceLink1: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/13585862#overview',
      referenceLink2: 'https://reactjs.org/docs/state-and-lifecycle.html',
      codepenEmbed: `<iframe height="750" style="width: 100%;" scrolling="no" title="KKzeRgx" src="https://codepen.io/kevinmnm/embed/KKzeRgx?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/KKzeRgx'>KKzeRgx</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'useEffect() Basics',
      show: true,
      selected: false,
      uniqueIdMatch: 'z97',
      date: '09/07/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'useEffect() is a lifecycle hook for functional components in React. It\'s bascially a combination of componentDidMount() and componentDidUpdate() in class based components. Therefore, useEffect() will trigger everytime state or props updates.',
      referenceLink1: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/13556284#content',
      referenceLink2: 'https://reactjs.org/docs/hooks-effect.html',
      codepenEmbed: `<iframe height="650" style="width: 100%;" scrolling="no" title="React useEffect() Syntax" src="https://codepen.io/kevinmnm/embed/ZEWRRdy?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/ZEWRRdy'>React useEffect() Syntax</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'useEffect() In-Depth',
      show: true,
      selected: false,
      uniqueIdMatch: 'z98',
      date: '09/08/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'useEffect() can be used conditionally.',
      referenceLink1: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/13556284#content',
      referenceLink2: 'https://reactjs.org/docs/hooks-effect.html',
      codepenEmbed: `<iframe height="750" style="width: 100%;" scrolling="no" title="React useEffect() In-Depth" src="https://codepen.io/kevinmnm/embed/QWNxBQg?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/QWNxBQg'>React useEffect() In-Depth</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Ref in Class-Component',
      show: true,
      selected: false,
      uniqueIdMatch: 'z99',
      date: '09/09/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'Use Ref to select element instead of selecting DOM.',
      referenceLink1: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/13556338#content',
      referenceLink2: 'https://reactjs.org/docs/refs-and-the-dom.html',
      codepenEmbed: `<iframe height="750" style="width: 100%;" scrolling="no" title="React Ref in Class-Component" src="https://codepen.io/kevinmnm/embed/NWNBpbX?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/NWNBpbX'>React Ref in Class-Component</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Ref in Func-Component',
      show: true,
      selected: false,
      uniqueIdMatch: 'z910',
      date: '09/10/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'Ref can also be used in function-components with useRef.',
      referenceLink1: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/13556340#content',
      referenceLink2: 'https://reactjs.org/docs/refs-and-the-dom.html',
      codepenEmbed: `<iframe height="550" style="width: 100%;" scrolling="no" title="React Ref in Functional-Component" src="https://codepen.io/kevinmnm/embed/bGpjWNm?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/bGpjWNm'>React Ref in Functional-Component</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'createContext',
      show: true,
      selected: false,
      uniqueIdMatch: 'z911',
      date: '09/11/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'Similar concept as Vuex. React state is used to circumvent props passing down to "nested" child components.',
      referenceLink1: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/13556344#content',
      referenceLink2: 'https://reactjs.org/docs/context.html#reactcreatecontext',
      codepenEmbed: `<iframe height="800" style="width: 100%;" scrolling="no" title="React Context" src="https://codepen.io/kevinmnm/embed/VwaBzyj?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/VwaBzyj'>React Context</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'contextType() & useContext()',
      show: true,
      selected: false,
      uniqueIdMatch: 'z912',
      date: '09/12/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'This will be in-use a lot more than traditional context setup method.',
      referenceLink1: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/13556346#content',
      referenceLink2: 'https://reactjs.org/docs/hooks-reference.html',
      codepenEmbed: `<iframe height="1000" style="width: 100%;" scrolling="no" title="React contextType() &amp; useContext()" src="https://codepen.io/kevinmnm/embed/jOqpGGg?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/jOqpGGg'>React contextType() &amp; useContext()</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: '$emit Equivalent!',
      show: true,
      selected: false,
      uniqueIdMatch: 'z913',
      date: '09/13/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'Vue has built-in method $emit. Same approach can be different in React.',
      referenceLink1: 'https://dev.to/vadims4/passing-down-functions-in-react-4618',
      referenceLink2: 'https://medium.com/@RupaniChirag/parent-child-communication-in-vue-angular-and-react-all-in-typescript-9a47c75cbf74',
      codepenEmbed: `<iframe height="700" style="width: 100%;" scrolling="no" title="React Equvalent $emit" src="https://codepen.io/kevinmnm/embed/vYGapYO?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/vYGapYO'>React Equvalent $emit</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'fetch() Basics',
      show: true,
      selected: false,
      uniqueIdMatch: 'z914',
      date: '09/14/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'fetch() is easier and clearner to write than AJAX.',
      referenceLink1: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch',
      referenceLink2: 'https://stackoverflow.com/questions/38332701/fetch-vs-ajaxcall',
      codepenEmbed: `<iframe height="800" style="width: 100%;" scrolling="no" title="fetch() Basics" src="https://codepen.io/kevinmnm/embed/KKzxKbq?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/KKzxKbq'>fetch() Basics</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'React Router Basics',
      show: true,
      selected: false,
      uniqueIdMatch: 'z915',
      date: '09/15/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'Very basic overview of React router.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="1000" style="width: 100%;" scrolling="no" title="React Router Basics" src="https://codepen.io/kevinmnm/embed/QWNVraa?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/QWNVraa'>React Router Basics</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Lazy Loading',
      show: true,
      selected: false,
      uniqueIdMatch: 'z916',
      date: '09/16/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'Remeber the basic syntax: <Router> => <Suspense> => <Switch> => <Route>',
      referenceLink1: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/12296826#content',
      referenceLink2: 'https://reactjs.org/docs/code-splitting.html',
      codepenEmbed: `<iframe height="1000" style="width: 100%;" scrolling="no" title="React Lazy Loading" src="https://codepen.io/kevinmnm/embed/xxVayEw?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/xxVayEw'>React Lazy Loading</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'React-Redux Setup',
      show: true,
      selected: false,
      uniqueIdMatch: 'z917',
      date: '09/17/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'React-Redux initial setup..',
      referenceLink1: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8226862#content',
      referenceLink2: 'https://www.youtube.com/watch?v=CVpUuw9XSjY&ab_channel=DevEd',
      codepenEmbed: `<iframe height="1000" style="width: 100%;" scrolling="no" title="React-Redux Setup" src="https://codepen.io/kevinmnm/embed/BaKqQgG?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/BaKqQgG'>React-Redux Setup</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Redux-React Setup Functional',
      show: true,
      selected: false,
      uniqueIdMatch: 'z918',
      date: '09/18/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'React-redux setup basics for function component.',
      referenceLink1: 'https://www.youtube.com/watch?v=CVpUuw9XSjY&ab_channel=DevEd',
      referenceLink2: 'https://react-redux.js.org/api/hooks',
      codepenEmbed: `<iframe height="800" style="width: 100%;" scrolling="no" title="Redux-React Setup Functional" src="https://codepen.io/kevinmnm/embed/abNRpEL?height=544&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/abNRpEL'>Redux-React Setup Functional</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Redux-React Setup Functional',
      show: true,
      selected: false,
      uniqueIdMatch: 'z919',
      date: '09/19/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'In class component, connect() needs to be used upon export.',
      referenceLink1: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8226862#content',
      referenceLink2: 'https://react-redux.js.org/api/connect#connect',
      codepenEmbed: `<iframe height="1000" style="width: 100%;" scrolling="no" title="Redux-React Setup Class" src="https://codepen.io/kevinmnm/embed/bGpmgzd?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/bGpmgzd'>Redux-React Setup Class</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Dispatch Input Value',
      show: true,
      selected: false,
      uniqueIdMatch: 'z920',
      date: '09/20/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'Quick overview of dispatching input value using Redux for class component.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="800" style="width: 100%;" scrolling="no" title="Dispatch Input Value" src="https://codepen.io/kevinmnm/embed/oNxaWez?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/oNxaWez'>Dispatch Input Value</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'void Operator Encounter',
      show: true,
      selected: false,
      uniqueIdMatch: 'z921',
      date: '09/21/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'void operator just resolved animation trigger issue.',
      referenceLink1: 'https://css-tricks.com/restart-css-animation/',
      referenceLink2: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void',
      codepenEmbed: `<iframe height="1000" style="width: 100%;" scrolling="no" title="void Operator Encounter" src="https://codepen.io/kevinmnm/embed/wvGQMGa?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/wvGQMGa'>void Operator Encounter</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'void For Animation Toggle!',
      show: true,
      selected: false,
      uniqueIdMatch: 'z922',
      date: '09/22/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'Magic of void operator to render consistent animation.',
      referenceLink1: 'https://css-tricks.com/restart-css-animation/',
      referenceLink2: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void',
      codepenEmbed: `<iframe height="1000" style="width: 100%;" scrolling="no" title="void For Animation!" src="https://codepen.io/kevinmnm/embed/qBZQbPL?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/kevinmnm/pen/qBZQbPL'>void For Animation!</a> by kevin
     (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>`
   },
   {
      topic: 'Development Setup',
      show: true,
      selected: false,
      uniqueIdMatch: 'z923',
      date: '09/23/2020',
      content: 'React',
      mdi: 'mdi-react',
      name: 'React',
      description: 'Quick documentation reference. Visit links to view in detail.',
      referenceLink1: 'https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing',
      referenceLink2: 'https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually',
      codepenEmbed: `No codepen.io example available for this content. <br><br><img src='img/react-development-guide.png' alt='screenshot'></img>`
   },
   {
      topic: 'includes() & indexOf()',
      show: true,
      selected: false,
      uniqueIdMatch: 'z924',
      date: '09/24/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'Quick note on simple JS built-in methods.',
      referenceLink1: 'https://www.w3schools.com/jsref/jsref_includes.asp',
      referenceLink2: 'https://www.w3schools.com/jsref/jsref_indexof.asp',
      codepenEmbed: `No codepen.io example available for this content. <br><br><img src='img/key_modifiers.png' alt='screenshot'></img>`
   },
   {
      topic: 'SCSS Hover Syntax',
      show: true,
      selected: false,
      uniqueIdMatch: 'z925',
      date: '09/25/2020',
      content: 'CSS',
      mdi: 'mdi-language-css3',
      name: 'CSS',
      description: 'Quick note on usefull SCSS pseudo syntax.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="700" style="width: 100%;" scrolling="no" title="SCSS Pseudo Syntax" src="https://codepen.io/kevinmnm/embed/yLOZLMw?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/yLOZLMw'>SCSS Pseudo Syntax</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Node.js Basics',
      show: true,
      selected: false,
      uniqueIdMatch: 'z926',
      date: '09/26/2020',
      content: 'Node',
      mdi: 'mdi-nodejs',
      name: 'Node',
      description: 'Some Node.js basics to keep in mind. Always refer to official documentation.',
      referenceLink1: 'https://nodejs.org/en/docs/',
      referenceLink2: 'https://nodejs.org/dist/latest-v14.x/docs/api/https.html#https_https_get_url_options_callback',
      codepenEmbed: `<iframe height="1000" style="width: 100%;" scrolling="no" title="Node.js Basics" src="https://codepen.io/kevinmnm/embed/YzqgpJK?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/YzqgpJK'>Node.js Basics</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Arrow Function Declaration Behavior',
      show: true,
      selected: false,
      uniqueIdMatch: 'z927',
      date: '09/27/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'Something to keep in mind when coding with vanilla JS.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="1000" style="width: 100%;" scrolling="no" title="JS Arrow Function Behaviors to Kepp in Mind" src="https://codepen.io/kevinmnm/embed/OJNqWzO?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/OJNqWzO'>JS Arrow Function Behaviors to Kepp in Mind</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'process.argv',
      show: true,
      selected: false,
      uniqueIdMatch: 'z928',
      date: '09/28/2020',
      content: 'Node',
      mdi: 'mdi-nodejs',
      name: 'Node',
      description: 'process.argv get argument from terminal.',
      referenceLink1: 'https://nodejs.org/docs/latest/api/process.html#process_process_argv',
      referenceLink2: 'https://nodejs.org/docs/latest/api/process.html#process_process_argv0',
      codepenEmbed: `<iframe height="500" style="width: 100%;" scrolling="no" title="Node.js process.argv" src="https://codepen.io/kevinmnm/embed/ZEWPLZg?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/ZEWPLZg'>Node.js process.argv</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Create Server with Node.js',
      show: true,
      selected: false,
      uniqueIdMatch: 'z929',
      date: '09/29/2020',
      content: 'Node',
      mdi: 'mdi-nodejs',
      name: 'Node',
      description: 'Creating server is the bascis of Node.js utilization.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="1000" style="width: 100%;" scrolling="no" title="Node.js Create Server" src="https://codepen.io/kevinmnm/embed/vYGPZBN?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/vYGPZBN'>Node.js Create Server</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Custom Route (URL)',
      show: true,
      selected: false,
      uniqueIdMatch: 'z930',
      date: '09/30/2020',
      content: 'Node',
      mdi: 'mdi-nodejs',
      name: 'Node',
      description: 'Node.js routing basics.',
      referenceLink1: 'https://teamtreehouse.com/library/user-route',
      referenceLink2: 'https://nodejs.org/dist/latest-v14.x/docs/api/url.html',
      codepenEmbed: `<iframe height="800" style="width: 100%;" scrolling="no" title="Node.js Custom Route (URL)" src="https://codepen.io/kevinmnm/embed/BaKEoyQ?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/BaKEoyQ'>Node.js Custom Route (URL)</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'module.exports',
      show: true,
      selected: false,
      uniqueIdMatch: 'z101',
      date: '10/01/2020',
      content: 'Node',
      mdi: 'mdi-nodejs',
      name: 'Node',
      description: 'Node.js module.exports for code splitting.',
      referenceLink1: 'https://teamtreehouse.com/library/user-route',
      referenceLink2: 'https://www.sitepoint.com/understanding-module-exports-exports-node-js/',
      codepenEmbed: `<iframe height="1000" style="width: 100%;" scrolling="no" title="Node.js exports.module File Structures" src="https://codepen.io/kevinmnm/embed/GRZLpNq?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/GRZLpNq'>Node.js exports.module File Structures</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'AJAX in Node.js',
      show: true,
      selected: false,
      uniqueIdMatch: 'z102',
      date: '10/02/2020',
      content: 'Node',
      mdi: 'mdi-nodejs',
      name: 'Node',
      description: 'Basic AJAX implementation example in Node.js',
      referenceLink1: 'https://www.valentinog.com/blog/http-js/',
      referenceLink2: 'https://www.valentinog.com/blog/http-js/',
      codepenEmbed: `<iframe height="800" style="width: 100%;" scrolling="no" title="Node.js AJAX Basics" src="https://codepen.io/kevinmnm/embed/NWNmGMy?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/NWNmGMy'>Node.js AJAX Basics</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Nodejs Content-Type Quick Tip',
      show: true,
      selected: false,
      uniqueIdMatch: 'z103',
      date: '10/03/2020',
      content: 'Node',
      mdi: 'mdi-nodejs',
      name: 'Node',
      description: 'Content-Type can be different per file type.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="600" style="width: 100%;" scrolling="no" title="Node.js Content-Type" src="https://codepen.io/kevinmnm/embed/GRZLBgJ?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/GRZLBgJ'>Node.js Content-Type</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Nodemon',
      show: true,
      selected: false,
      uniqueIdMatch: 'z104',
      date: '10/04/2020',
      content: 'Node',
      mdi: 'mdi-nodejs',
      name: 'Node',
      description: 'Nodemon is a developer tool to automate auto run development server.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="500" style="width: 100%;" scrolling="no" title="Nodemon" src="https://codepen.io/kevinmnm/embed/JjXVmjy?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/JjXVmjy'>Nodemon</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Express.js Basics',
      show: true,
      selected: false,
      uniqueIdMatch: 'z105',
      date: '10/05/2020',
      content: 'Express',
      mdi: 'mdi-nodejs',
      name: 'Express',
      description: 'Basic setup.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="1000" style="width: 100%;" scrolling="no" title="Express.js Basic Setup" src="https://codepen.io/kevinmnm/embed/jOqoWOp?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/jOqoWOp'>Express.js Basic Setup</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Express.js Simple Routing',
      show: true,
      selected: false,
      uniqueIdMatch: 'z106',
      date: '10/06/2020',
      content: 'Express',
      mdi: 'mdi-nodejs',
      name: 'Express',
      description: 'Basic routing method.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="500" style="width: 100%;" scrolling="no" title="Express.js Simple Routing" src="https://codepen.io/kevinmnm/embed/mdPYEor?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/mdPYEor'>Express.js Simple Routing</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'use(), get(), post()',
      show: true,
      selected: false,
      uniqueIdMatch: 'z107',
      date: '10/07/2020',
      content: 'Express',
      mdi: 'mdi-nodejs',
      name: 'Express',
      description: 'Different routing methods usage in Express.js',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="1000" style="width: 100%;" scrolling="no" title="Express.js use(), get(), post()" src="https://codepen.io/kevinmnm/embed/xxVNRrX?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/xxVNRrX'>Express.js use(), get(), post()</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'body-parser',
      show: true,
      selected: false,
      uniqueIdMatch: 'z108',
      date: '10/08/2020',
      content: 'Express',
      mdi: 'mdi-nodejs',
      name: 'Express',
      description: 'body-parser is one of the eseential package to include in Express.js projects.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="1000" style="width: 100%;" scrolling="no" title="Express.js body-parser" src="https://codepen.io/kevinmnm/embed/JjXqbev?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/JjXqbev'>Express.js body-parser</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: '404/Missing Page',
      show: true,
      selected: false,
      uniqueIdMatch: 'z109',
      date: '10/09/2020',
      content: 'Express',
      mdi: 'mdi-nodejs',
      name: 'Express',
      description: 'A simple an quick way to implement 404/missing page in Express.js.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="500" style="width: 100%;" scrolling="no" title="Express.js 404 Page" src="https://codepen.io/kevinmnm/embed/BaKeWNm?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/BaKeWNm'>Express.js 404 Page</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Route File Code Splitting',
      show: true,
      selected: false,
      uniqueIdMatch: 'z1010',
      date: '10/10/2020',
      content: 'Express',
      mdi: 'mdi-nodejs',
      name: 'Express',
      description: 'This is just an example, not an absolute rule.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="2000" style="width: 100%;" scrolling="no" title="Express.js Routing File Structure Example" src="https://codepen.io/kevinmnm/embed/BaKeROB?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/BaKeROB'>Express.js Routing File Structure Example</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Template Engines',
      show: true,
      selected: false,
      uniqueIdMatch: 'z1011',
      date: '10/11/2020',
      content: 'Node',
      mdi: 'mdi-nodejs',
      name: 'Node',
      description: 'Template engines are used in Node.js to reduce amount of HTML code. It can dynamically render certain HTML codes conditionally.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `No codepen.io example available for this content. <br><br><img src='img/nodejs_template_engines.png' alt='screenshot'></img>`
   },
   {
      topic: 'MongoDB Basic Setup',
      show: true,
      selected: false,
      uniqueIdMatch: 'z1012',
      date: '10/12/2020',
      content: 'Mongo',
      mdi: 'mdi-leaf',
      name: 'MongoDB',
      description: 'Go to mongodb website to create account and cluster before setting it up.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="1000" style="width: 100%;" scrolling="no" title="MongoDB Basic Setup" src="https://codepen.io/kevinmnm/embed/dyMxgLJ?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/dyMxgLJ'>MongoDB Basic Setup</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'MongoDB Setup/Tip',
      show: true,
      selected: false,
      uniqueIdMatch: 'z1013',
      date: '10/13/2020',
      content: 'Mongo',
      mdi: 'mdi-leaf',
      name: 'MongoDB',
      description: 'Continuing from last slide.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="1000" style="width: 100%;" scrolling="no" title="MongoDB Better Setup" src="https://codepen.io/kevinmnm/embed/MWyNzGp?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/MWyNzGp'>MongoDB Better Setup</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Vuetify Quick Reference',
      show: true,
      selected: false,
      uniqueIdMatch: 'z1014',
      date: '10/14/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: 'Some of the most frequently used concepts in Vuetify.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="1500" style="width: 100%;" scrolling="no" title="Vuetify Reference" src="https://codepen.io/kevinmnm/embed/PozYpqq?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/PozYpqq'>Vuetify Reference</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: '!! with || in JavaScript',
      show: true,
      selected: false,
      uniqueIdMatch: 'z1015',
      date: '10/15/2020',
      content: 'JS',
      mdi: 'mdi-language-javascript',
      name: 'JavaScript',
      description: 'I\'m learning new things everyday.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="500" style="width: 100%;" scrolling="no" title="!! in JavaScript" src="https://codepen.io/kevinmnm/embed/YzWKQKe?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/YzWKQKe'>!! in JavaScript</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Vuetify Grid System',
      show: true,
      selected: false,
      uniqueIdMatch: 'z1016',
      date: '10/16/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: 'Quick overview on v-container, v-row, and v-col',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="1000" style="width: 100%;" scrolling="no" title="Vuetify Grid System" src="https://codepen.io/kevinmnm/embed/NWrKaRM?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href='https://codepen.io/kevinmnm/pen/NWrKaRM'>Vuetify Grid System</a> by kevin
       (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
     </iframe>`
   },
   {
      topic: 'Scroll Behavior Tip',
      show: true,
      selected: false,
      uniqueIdMatch: 'z1017',
      date: '10/17/2020',
      content: 'Vue',
      mdi: 'mdi-vuejs',
      name: 'Vue',
      description: 'Custom method of asynchronous scrolling after a component loads.',
      referenceLink1: '',
      referenceLink2: '',
      codepenEmbed: `<iframe height="500" style="width: 100%;" scrolling="no" title="Vue Scroll Behavior Tip" src="https://codepen.io/kevinmnm/embed/qBNOWee?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
      See the Pen <a href='https://codepen.io/kevinmnm/pen/qBNOWee'>Vue Scroll Behavior Tip</a> by kevin
      (<a href='https://codepen.io/kevinmnm'>@kevinmnm</a>) on <a href='https://codepen.io'>CodePen</a>.
    </iframe>`
   }

];


/***** MORE *****/
// {
   //    topic: '',
//    show: true,
//    selected: false,
//    uniqueIdMatch: '',
//    date: '',
//    content: 'Mysql',
//    mdi: 'mdi-database-search',
//    name: '',
//    description: '',
//    referenceLink1: '',
//    referenceLink2: '',
//    codepenEmbed: ``
// }
// {
   //    topic: '',
//    show: true,
//    selected: false,
//    uniqueIdMatch: '',
//    date: '',
//    content: 'Other',
//    mdi: 'mdi-unfold-more-vertical',
//    name: '',
//    description: '',
//    referenceLink1: '',
//    referenceLink2: '',
//    codepenEmbed: ``
// }


export default contents

