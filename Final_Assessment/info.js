/*
Student Name: Arryell Parris
Student ID: 134838192
Student Email: aparris3@myseneca.ca

I declare that my assignment is wholly my own work in accordance with Seneca Academic Policy. No part of this assignment has been copied manually or electronically from any other source (including web sites) except for the information supplied by the BTI225 instructors and / or made availabe in this assignment for my use.

I also declare that no part of this assignment has been distributed to other students.
*/

/*var msg_passLen = `Password must be `;
var msg_passFirstCh = ``;
var msg_pass1D1U = ``;
var msg_usrLen = ``;
var msg_usrFirstCh = ``;
var msg_nameLetters*/

var error_msgs = new Array();
var ARR_SIZE = 7;

for (var i=0; i<ARR_SIZE; i++)
{
    error_msgs[i] = "ERROR: ";
}   //end for adding empty string literals to 'errors_arr'

error_msgs[0] += "First Name and Last Name may contain ONLY letters, spaces, hyphens (-) and apostrohpes (').";
error_msgs[1] += "First character of username must be a letter.";
error_msgs[2] += "Username must be at least 6 characters long.";
error_msgs[3] += "First character of password must be a letter.";
error_msgs[4] += "Password must be EXACTLY 6 characters long.";
error_msgs[5] += "Password must contain at least one uppercase letter AND at least one digit.";
error_msgs[6] += "Passwords must match.";

var regExp_Digit = /[0-9]/;    //this regular expression matches digits only
var regExp_UppLet = /[A-Z]/;    //this regular expression matches UPPERCASE letters only
var regExp_Letter = /[a-zA-Z]/; //this regular expression matches letters only
var regExp_ValCh = /[a-zA-Z\s\-\']/;  //this regular expression matches the characters which are valid for FirstName and LastName

function isString(str)
{
    var ret = false;
    if( (typeof(str) == "string") || (pass instanceof String) )
    {
        ret = true;
    }

    return ret;
}

/* The following five functions: passLenValid(), userLenValid(), hasReqChars(), firstChValid(), nameValid()
    all return -1 if the parameter was not a string. */

// checks if the password's length is valid (i.e. exactly 6), returns -1 if the parameter was not a string, returns 0 if the parameter was not valid, returns 1 if parameter was valid
// returns 1 if the parameter was EXACTLY 6 chars long, otherwise returns 0
function passLenValid(pass) {
    var ret = 0;

    if (isString(pass) == true)
    {
        if (pass.length == 6)
        {   //if the length of 'pass' is exactly 6 then return true
            ret = 1;
        }
        else {
            ret = 0;
        }
    }
    else {
        ret = -1;
    }

    return ret;
}

// checks if the username's length is valid (i.e. 6 or more)
// returns 1 if the parameter was at least 6 chars long, otherwise returns 0
function userLenValid(user) {
    var ret = 0;

    if (isString(user) == true)
    {
        if (user.length >= 6)
        {   //if the length of 'user' is at least 6 then return true
            ret = 1;
        }
        else {
            ret = 0;
        }
    }
    else {
        ret = -1;
    }

    return ret;
}

// checks if the 'pass' parameter contains the required characters
// counts the number of UPPERCASE letters and digits in the parameter, if there is at least one of EACH then this function returns 1, otherwise returns 0
function hasReqChars(pass) {
    var ret = 0;

    if (isString(pass) == true)
    {
        var len = pass.length;
        var n_upplet = 0;
        var n_digit = 0;

        for (var i=0; i<len; i++)
        {
            if (pass[i].match(regExp_UppLet) != null)
            {   //if the current character is an uppercase letter
                n_upplet++; //increment 'n_upplet'
            }
            else if (pass[i].match(regExp_Digit) != null)
            {   //if the current character is a digit
                n_digit++;  //increment 'n_digit'
            }
        }

        if ( (n_upplet > 0) && (n_digit > 0) )
        {   //if there is at least one digit AND at least one uppercase letter then return 1
            ret = 1;
        }
        else {
            ret = 0;
        }
    }
    else {
        ret = -1;
    }

    return ret;
}

// checks if the 'str' parameter's first character is a letter
// returns 1 if the first character of the parameter was valid, otherwise returns 0
function firstChValid(str) {
    var ret = 0;

    if (isString(str) == true)
    {
        var valid = false;

        if (str[0].match(regExp_Letter) == null)
        {   //if the first character is NOT a letter then return 0
            ret = 0;
        }
        else {
            ret = 1;
        }
    }
    else {
        ret = -1;
    }

    return ret;
}

// checks if the 'name' parameter contains only the acceptable characters
// returns 1 if the name contains only valid characters, returns 0 otherwise
function nameValid(name) {
    var ret = 0;

    if (isString(name) == true)
    {
        var len = name.length;
        var n_inval = 0;

        for (var i=0; i<len; i++)
        {
            if (name[i].match(regExp_ValCh) == null)
            {
                n_inval++;
            }
        }

        if (n_inval == 0)
        {
            ret = 1;
        }
        else {
            ret = 0;
        }
    }
    else {
        ret = -1;
    }

    return ret;
}


function passValid(pass)
{
    var ret = 0;

    if (isString(pass) == true)
    {
        var valid = false;

        if ( (firstChValid(pass) == 1) && (passLenValid(pass) == 1) && (hasReqChars(pass) == 1) )
        {   //if all three return 1 then
            ret = 1;    //return 1
        }
        else {
            ret = 0;
        }
    }
    else {
        ret = -1;
    }

    return ret;
}


function userValid(user)
{
    var ret = 0;

    if (isString(user) == true)
    {
        var valid = false;

        if ( (firstChValid(user) == 1) && (userLenValid(user) == 1) )
        {   //if both return 1 then
            ret = 1;    //return 1
        }
        else {
            ret = 0;
        }
    }
    else {
        ret = -1;
    }

    return ret;
}

function BlockA (fname, lname)
{
    var ret = -1;

    if ( (nameValid(fname) !=1 ) || (nameValid(lname) !== 1)  )
    {
        ret = 0;
    }
    return ret;
}

function BlockB (user)
{
    var ret = -1;

    //Block B: if the username is invalid in any way
    if (userValid(user) != 1)
    {
        //if the first char of 'user' is not valid
        if (firstChValid(user) != 1)
        {
            ret = 1;
        }

        //if the length of 'user' is not valid, note that the length will only be tested if the first char was valid
        else if (userLenValid(user) != 1)
        {
            ret = 2;
        }
    }

    return ret;
}

function BlockC (pass1, pass2)
{
    var ret = -1;
    //Block C: if the password is invalid in any way
    if (passValid(pass) != 1)
    {
        //if the first char of 'pass1' is not valid
        if (firstChValid(pass1) != 1)
        {
            ret = 3;
        }

        //if the length of 'pass1' is not valid, note that the length will only be verified if the first char was valid
        else if (passLenValid(pass1) != 1)
        {
            ret = 4;
        }

        //if 'pass1' does not contain the required characters, required characters will only be checked for if the length was valid
        else if (hasReqChars(pass1) != 1)
        {
            ret = 5

        }

        //if 'pass1' and 'pass2' do not match, passwords will only be checked for matching if 'pass1' contained all required chars
        else if ( (pass1==pass2) == false)
        {
            ret = 6
        }
    }

    return ret;
}

function showErrors(div, list, pgh)
{
    removeChildren(div);
    var page_br = document.createElement("br");

    for (var a=0; a<error_list.length; a++)
    {
        if (a > 0)
        {   //if this is NOT the first error message then
            pgh.appendChild(page_br);  //append two page breaks to 'pgh'
            pgh.appendChild(page_br);
        }
        pgh.appendChild(list[a]);    //append the error message text node to 'pgh'
    }

    div.appendChild(errorPgh);
    alert("errors printed");
}


function removeChildren(html_element)
{
    var num_children = html_element.childNodes.length;

    if (html_element.childNodes.length > 0)
        {
            for (var e=0; e<num_children; e++)
            {
                html_element.childNodes[e].remove();
            }
        }
}
/*
function validateForm()
{
    alert("The form IS PENDING");

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var user = document.getElementById("username").value;
    var pass1 = document.getElementById("pass").value;
    var pass2 = document.getElementById("pass_con").value;

        var x = BlockA(fname, lname);
        var y = BlockB(user);
        var z = BlockC(pass1, pass2);

        if ( (x==-1) && (y==-1) && (z==-1) )
        {
            return true;
        }
        else{
            return false;
        }

        //if NONE of the Blocks executed then 'z' remains at 0
        //'z' always contains the number of errors

    
}   //end addErrorMsgs() function*/

function validateForm()
{
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var user = document.getElementById("username").value;
    var pass1 = document.getElementById("pass").value;
    var pass2 = document.getElementById("pass_con").value;
    var error_list = [];
    var errorPgh = document.createElement("p");
    var n = 0;
    var q = 0;

var checkstr = `fname = ${fname}, lname = ${lname}, user = ${user}, pass1 = ${pass1}, pass2 = ${pass2}`;
alert(checkstr);

    //removeChildren(errorPgh)
    function add_error_msg (z, val, list, messages)
    {
        list[z] = document.createTextNode(messages[val]);
        z++;

        return z;
    }

    //Block A: if either of the names is invalid
    var x = BlockA(fname, lname);
    if (x > -1) {
        //alert("Problem with name.");
        q = add_error_msg(n, x, error_list, error_msgs);
    }

    //Block B: if the username is invalid in any way
    var y = BlockB(user);
    if (y > -1) {
        //alert("Problem with user.");
        q = add_error_msg(n, y, error_list, error_msgs);
    }

    //Block C: if 'pass1' is invalid in anyway or if 'pass1' and 'pass2' do not match
    var z = BlockC(pass1, pass2);
    if (z > -1) {
        //alert("Problem with password.");
        q = add_error_msg(n, z, error_list, error_msgs);
    }

    if (q > 0)
    {
        //alert("Errors detected!");
        showErrors(sidePanDiv, error_list, errorPgh);
        /*document.getElementById("signup_form").submit(function (f) {
            f.preventDefault();
        })*/
        return false;
    }   //end if 'num_errors' > 0
    else {
        //alert("Submitting form.");
        return true;
    }
}

/*window.onload = function ()
{
    alert("window has loaded");
    //var sidePan_helpMsg = document.getElementById("help_message");  //this line copies the default help-message that is displayed in the side panel before any error messages are added
    //var form_elem = document.getElementById("signup_form");
}*/
