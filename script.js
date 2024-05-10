<script>
    function handleFormSubmit(event){
        event.preventDefault();
        var username=document.forms["myForm"]["username"].value;
        var fruit=document.forms["myForm"]["fruit"].value;
        var gender=document.forms["myForm"]["gender"].value;
        var country=document.forms["myForm"]["country"].value;
        alert("Form submitted!");
    }

</script>