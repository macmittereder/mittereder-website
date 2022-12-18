import icon from "../../images/d/dicon.png";
import ProjectHeader from "./ProjectHeader";
import ProjectFooter from "./ProjectFooter";
import { useEffect } from "react";

const MitterederWebsite = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js";
    script.async = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex bg-white items-start flex-1 justify-center flex-wrap flex-col p-2">
      <ProjectHeader
        title="Mittereder.com"
        icon={icon}
        summary={`A portfolio website to show some projects that I have started and finished. Originally
        written in Pug and Node.js using Sass and Bootstrap in 2016 and now rewritten in React with Tailwindcss.`}
      />
      <hr />
      <div className="flex">
        <div className="flex flex-1">
          <pre className="prettyprint rounded-xl">{`
html
  head
    title= title
    block css
      link(rel='stylesheet', type='text/css', href='/css/main.min.css')
      link(rel='stylesheet', type='text/css', href='/css/main.min.css.map')
        
  body
    //- Navigation Bar
    a(href="/")
      img(src="/images/icons/fixedlogo.png", class="logoimage")

    ul.topnav
      li
        a(href="https://www.linkedin.com/in/mackenzie-mittereder/") LINKEDIN
      li
        a(href="https://github.com/macmittereder") GITHUB
      li
        a(href="/projects") PROJECTS
      li
        a(href="/") HOME

    block content	
      
  footer
    block footer
      script(src="/js/bootstrap/bootstrap.min.js")
      script(src="/js/material/material.min.js")
      
    hr
    address= "Copyright 2022 All Rights Reserved www.mittereder.com"
    `}</pre>
          <pre className="prettyprint">{`
.card {
  @include card;
}

$list: gz, fr, lc, fi, fmp, gg, pp, rps, wam, d;
@each $name in $list {
  .#{$name}-card-image {
    &.mdl-card {
      width: 100%;
      height: 256px;
      background: url('/images/#{$name}/#{$name}icon.png') center / cover;
    }
    &>.mdl-card__actions {
      height: 52px;
      padding: 16px;
      background: rgba(0, 0, 0, 0.2);
    }
    &__filename {
      color: #fff;
      font-size: 14px;
      font-weight: 500;
    }
  }
}
    `}</pre>
        </div>
        <div className="flex flex-1">
          <p>Description</p>
        </div>
      </div>
      <ProjectFooter />
    </div>
  );
};

export default MitterederWebsite;
