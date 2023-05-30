$(document).ready(function () {

    $("h1").lettering();
    resetCheckboxes();
    resizer();

    function resetCheckboxes() {
        $('#container-border').prop('checked', true);
        $("#container-border-inner").attr('checked', true);
        $('#container-border-round').prop('checked', false);
        $('#container-border-inner-round').prop('checked', false);
        $("#container-inner-border").prop('checked', true);
    }



    $("#reset").click(function () {
        resetCheckboxes();
        resetSliders();
        containerBorderToggle();
        containerRoundToggle();
        containerInnerRoundToggle();
        innerBorderToggle();
    });

    function resizer() {
        const allRanges = document.querySelectorAll("#logo-options");
        allRanges.forEach((wrap) => {
            const textRange = wrap.querySelector(".text-range");
            const logoRange = wrap.querySelector(".logo-range");
            const paddingRange = wrap.querySelector(".padding-range");
            const outerPaddingRange = wrap.querySelector(".outer-padding-range");
            const lineRange = wrap.querySelector(".line-range");
            textRange.addEventListener("input", () => {
                $(":root")
                    .get(0)
                    .style.setProperty("--font-spacing", textRange.value + "px");
            });
            logoRange.addEventListener("input", () => {
                $("#circle-inner h2").css("font-size", logoRange.value + "px");
            });
            paddingRange.addEventListener("input", () => {
                $("#border-inner").css("padding", paddingRange.value + "px");
            });
            outerPaddingRange.addEventListener("input", () => {
                $("#container").css("padding", outerPaddingRange.value + "px");
            });
            lineRange.addEventListener("input", () => {
                $(":root")
                    .get(0)
                    .style.setProperty("--line-size", lineRange.value + "px");
            });
        });
    }

    function resetSliders() {
        var a = $(".text-range").attr('value');
        $('.text-range').val(a);
        $(":root")
            .get(0)
            .style.setProperty("--font-spacing", a + "px");

        var b = $(".logo-range").attr('value');
        $('.logo-range').val(b);
        $("#circle-inner h2").css("font-size", b + "px");

        var c = $(".padding-range").attr('value');
        $('#border-inner').val(c);
        $("#border-inner").css("padding", c + "px");

        var d = $(".outer-padding-range").attr('value');
        $('#container').val(d);
        $("#container").css("padding", d + "px");

        var e = $(".line-range").attr('value');
        $('.line-range').val(e);
        $(":root")
            .get(0)
            .style.setProperty("--line-size", e + "px");

    }

    $("#container-border").click(function () {
        containerBorderToggle();
    });

    $("#container-border-round").click(function () {
        containerRoundToggle();
    });

    $("#container-border-inner-round").click(function () {
        containerInnerRoundToggle();
    });

    $("#container-inner-border").click(function () {
        innerBorderToggle();
    });

    function containerBorderToggle() {
        if ($('#container-border').is(":checked")) {
            $("#container").css({
                "border-color": "var(--color-cream)",
                "padding": "calc(var(--line-size) * 2)",
            });
            $("#container-border-round-wrap").css({
                "opacity": "1",
                "pointer-events": "auto",
            });
        } else {
            $("#container").css({
                "border-color": "transparent",
                "padding": "0",

            });

            $("#container-border-round-wrap").css({
                "opacity": "0.3",
                "pointer-events": "none",
            });
        }
    }

    function containerRoundToggle() {
        if ($("#container-border-round").is(":checked")) {
            $("#container").css("border-radius", "50%");
        } else {
            $("#container").css("border-radius", "0");
        }
    }

    function containerInnerRoundToggle() {
        if ($("#container-border-inner-round").is(":checked")) {
            $("#border-inner").css("border-radius", "50%");
        } else {
            $("#border-inner").css("border-radius", "0");
        }
    }

    function innerBorderToggle() {
        if ($("#container-inner-border").is(":checked")) {
            $("#border-inner").css("border", "var(--line-size) solid var(--color-cream)");
        } else {
            $("#border-inner").css("border", "0 solid transparent");
        }
    }

});