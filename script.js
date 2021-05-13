
    function CalculateArea(){
        var diameter =document.form1.txtDiameter.value;
        document.write("<P>The area of the circle is " + (1/4 * Math.PI * diameter ** 2 ) + "</p>");
        document.write("<P>The circumference of the circle is " + (Math.PI * diameter) + "</p>");
    }