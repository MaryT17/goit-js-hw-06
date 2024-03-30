const e=document.querySelector(".login-form");e.addEventListener("submit",(function(l){l.preventDefault();const t=l.target.elements,s=t.email.value,n=t.password.value;if(s&&n){const l={email:s,password:n};console.log(l),e.reset()}else alert("All fields must be filled in.")}));
//# sourceMappingURL=task-08.27879618.js.map
