



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-bbde3b2f5b4398fc37486b7dd931c73ffdc56c8ba3a9e5dfc2852dffe0d43f06.css" integrity="sha256-u947L1tDmPw3SGt92THHP/3FbIujqeXfwoUt/+DUPwY=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-eea4494d27747b4b5e09f38268e2ee771b11dca410a9bcbcaac2f65119e85ba3.css" integrity="sha256-7qRJTSd0e0teCfOCaOLudxsR3KQQqby8qsL2URnoW6M=" media="all" rel="stylesheet" />
    
    
    
    

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-f2534631b1ca6bf10c7effe73f9786cc1fb3426f2674a91519497864b6648282.js" rel="preload" />
    
    <link as="script" href="https://assets-cdn.github.com/assets/github-8e0cda42da97a6269d17f304321c8657a34798ca5bd523d8495917753111e0e0.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    <title>cloud9carousel/jquery.js at gh-pages · specious/cloud9carousel</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars3.githubusercontent.com/u/451178?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="specious/cloud9carousel" name="twitter:title" /><meta content="cloud9carousel - Slick carousel for jQuery / Zepto" name="twitter:description" />
      <meta content="https://avatars3.githubusercontent.com/u/451178?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="specious/cloud9carousel" property="og:title" /><meta content="https://github.com/specious/cloud9carousel" property="og:url" /><meta content="cloud9carousel - Slick carousel for jQuery / Zepto" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTAyMTg5NTQ6ZDA1MWE3NTViNmQ3ODgzMGMzNTc3NGMxYmM5YmRiMWM6Y2MzMDBkMmYwNGE0MmI2ZjU0ZGYwMzE1ZWYzYzJlYjIxNDJiYjgxMmI0YWU4YWYyNjMxOTMyNGRhOWFhZDlhYw==--c5f1852d5bf18658e745df6841cb8a4b52ba7347">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">
    <meta name="request-id" content="55497D83:2CFCE:153E91ED:57C73B18" data-pjax-transient>

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="55497D83:2CFCE:153E91ED:57C73B18" name="octolytics-dimension-request_id" /><meta content="10218954" name="octolytics-actor-id" /><meta content="nickchalkida" name="octolytics-actor-login" /><meta content="449b370f01611ec07f37067b2cb6064e2da1f6c60d76e73e7502ba0c36195c65" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="nickchalkida">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="OWI2MzZmZjk5NmYwNzllZjZjMTFkNDU2NDAzYTIzM2ZhMzFlNzA2YjYzZjQxOGFkNWFhY2E1NjZiODYxYWQzNHx7InJlbW90ZV9hZGRyZXNzIjoiODUuNzMuMTI1LjEzMSIsInJlcXVlc3RfaWQiOiI1NTQ5N0Q4MzoyQ0ZDRToxNTNFOTFFRDo1N0M3M0IxOCIsInRpbWVzdGFtcCI6MTQ3MjY3NDU4NH0=">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="a0b5ea3a042efec79495bb30b1ee72993eeebf5a">
    <meta content="a9f8a8976c96df34e093e82ee8ce0f270037a15e" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="9ae63c4544e6c5e06a8fc57ce21b3a59">
    

      
  <meta name="description" content="cloud9carousel - Slick carousel for jQuery / Zepto">
  <meta name="go-import" content="github.com/specious/cloud9carousel git https://github.com/specious/cloud9carousel.git">

  <meta content="451178" name="octolytics-dimension-user_id" /><meta content="specious" name="octolytics-dimension-user_login" /><meta content="10330230" name="octolytics-dimension-repository_id" /><meta content="specious/cloud9carousel" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="10330230" name="octolytics-dimension-repository_network_root_id" /><meta content="specious/cloud9carousel" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/specious/cloud9carousel/commits/gh-pages.atom" rel="alternate" title="Recent Commits to cloud9carousel:gh-pages" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/specious/cloud9carousel/blob/gh-pages/js/lib/jquery.js" data-pjax-transient>
  </head>


  <body class="logged-in  env-production linux vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/specious/cloud9carousel/search" class="js-site-search-form" data-scoped-search-url="/specious/cloud9carousel/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-channel="tenant:1:notification-changed:10218954" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status "></span>
        <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="specious/cloud9carousel">This repository</span>
  </div>
    <a class="dropdown-item" href="/specious/cloud9carousel/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/nickchalkida"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@nickchalkida" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/10218954?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">nickchalkida</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/nickchalkida" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
          <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
            Your stars
          </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>


        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="a9f8a8976c96df34e093e82ee8ce0f270037a15e" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="UoW4u9fNbeFULhaldigrIPw1lukgyaYIBh/NM4MzknZOAra7lC/MuRFUloJrkXLvEfArdS9T6AiAW27KPuUFmQ==" /></div>
          <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="a9f8a8976c96df34e093e82ee8ce0f270037a15e" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="8pnML+ss+mCL/GDiL2OmJVAhcPdeua4kegaHVLtBXjTLXNJgrNTi8jI5ioomvGHOqt23JYJaNITYsA76zpKugQ==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="10330230" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/specious/cloud9carousel/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/specious/cloud9carousel/watchers"
            aria-label="11 users are watching this repository">
            11
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/specious/cloud9carousel/unstar" class="starred" data-form-nonce="a9f8a8976c96df34e093e82ee8ce0f270037a15e" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="gx+nDiy6wA/VbHZdtsQI12vsEicA0PvpKiMLZ9r517RRDRRGzsNNgJPHbIa7kubVUyCkh/uodOpurwN99+ssiQ==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar specious/cloud9carousel"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/specious/cloud9carousel/stargazers"
           aria-label="68 users starred this repository">
          68
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/specious/cloud9carousel/star" class="unstarred" data-form-nonce="a9f8a8976c96df34e093e82ee8ce0f270037a15e" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="IypeeAiRab18/FhY2wZAiNx0/OeuDB2thzXRBf+TlFEv/3pmRL9Qqs3O0d0MEjPhTmz1unmaIDurUJKDiXMnyg==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star specious/cloud9carousel"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/specious/cloud9carousel/stargazers"
           aria-label="68 users starred this repository">
          68
        </a>
</form>  </div>

  </li>

  <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of specious/cloud9carousel to your account"
              aria-label="Fork your own copy of specious/cloud9carousel to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
            Fork
          </a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header" data-facebox-id="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/specious/cloud9carousel/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64" />
            </include-fragment>
          </div>

    <a href="/specious/cloud9carousel/network" class="social-count"
       aria-label="31 users are forked this repository">
      31
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/specious" class="url fn" rel="author">specious</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/specious/cloud9carousel" data-pjax="#js-repo-pjax-container">cloud9carousel</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/specious/cloud9carousel/tree/gh-pages" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /specious/cloud9carousel/tree/gh-pages" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/specious/cloud9carousel/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /specious/cloud9carousel/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">4</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/specious/cloud9carousel/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /specious/cloud9carousel/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>




  <a href="/specious/cloud9carousel/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /specious/cloud9carousel/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"></path></svg>
    Pulse
</a>
  <a href="/specious/cloud9carousel/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /specious/cloud9carousel/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/specious/cloud9carousel/blob/27ace1a54bcb543710620c244f3d0dfef131f8d2/js/lib/jquery.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:b3b6689f626a2e6e44d5ab15c0ff565f -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">gh-pages</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/specious/cloud9carousel/blob/gh-pages/js/lib/jquery.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/specious/cloud9carousel/blob/master/js/lib/jquery.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/specious/cloud9carousel/tree/2.0.5/js/lib/jquery.js"
              data-name="2.0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.0.5">
                2.0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/specious/cloud9carousel/tree/2.0.4/js/lib/jquery.js"
              data-name="2.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.0.4">
                2.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/specious/cloud9carousel/tree/2.0.3/js/lib/jquery.js"
              data-name="2.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.0.3">
                2.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/specious/cloud9carousel/tree/2.0/js/lib/jquery.js"
              data-name="2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.0">
                2.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group float-right">
    <a href="/specious/cloud9carousel/find/gh-pages"
          class="js-pjax-capture-input btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/specious/cloud9carousel/tree/gh-pages"><span>cloud9carousel</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/specious/cloud9carousel/tree/gh-pages/js"><span>js</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/specious/cloud9carousel/tree/gh-pages/js/lib"><span>lib</span></a></span><span class="separator">/</span><strong class="final-path">jquery.js</strong>
  </div>
</div>

<include-fragment class="commit-tease" src="/specious/cloud9carousel/contributors/gh-pages/js/lib/jquery.js">
  <div>
    Fetching contributors&hellip;
  </div>

  <div class="commit-tease-contributors">
    <img alt="" class="loader-loading float-left" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" />
    <span class="loader-error">Cannot retrieve contributors at this time</span>
  </div>
</include-fragment>
<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/specious/cloud9carousel/raw/gh-pages/js/lib/jquery.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/specious/cloud9carousel/blame/gh-pages/js/lib/jquery.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/specious/cloud9carousel/commits/gh-pages/js/lib/jquery.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>


        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/specious/cloud9carousel/edit/gh-pages/js/lib/jquery.js" class="inline-form js-update-url-with-hash" data-form-nonce="a9f8a8976c96df34e093e82ee8ce0f270037a15e" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="hC6DNJhxD6+PYbS4NnzNUa/ftIagn7cP8+J7jY0K7abyii7i+h0l3ozLN7cOgtc39OD06MVtFO35+GCGEQl3dg==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/specious/cloud9carousel/delete/gh-pages/js/lib/jquery.js" class="inline-form" data-form-nonce="a9f8a8976c96df34e093e82ee8ce0f270037a15e" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="osUDqXRWQ4DclK9Z41G9btF1Ph+Ca9OvPQZ9tjDCodsW1RoxsVODpBOU09y2XdR8wqq2lQKY0Z/Jt6lKU5JeMQ==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>
          </button>
</form>  </div>

  <div class="file-info">
      7 lines (6 sloc)
      <span class="file-info-divider"></span>
    81.5 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">/*! jQuery v2.0.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">//@ sourceMappingURL=jquery-2.0.2.min.map</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">*/</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p=&quot;2.0.2&quot;,f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(&lt;[\w\W]+&gt;)[^&gt;]*|#([\w-]*))$/,C=/^&lt;(\w+)\s*\/?&gt;(?:&lt;\/\1&gt;|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener(&quot;DOMContentLoaded&quot;,S,!1),e.removeEventListener(&quot;load&quot;,S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if(&quot;string&quot;==typeof e){if(r=&quot;&lt;&quot;===e.charAt(0)&amp;&amp;&quot;&gt;&quot;===e.charAt(e.length-1)&amp;&amp;e.length&gt;=3?[null,e,null]:T.exec(e),!r||!r[1]&amp;&amp;t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&amp;&amp;t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&amp;&amp;x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&amp;&amp;i.parentNode&amp;&amp;(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&amp;&amp;(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:&quot;&quot;,length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0&gt;e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0&gt;e?t:0);return this.pushStack(n&gt;=0&amp;&amp;t&gt;n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for(&quot;boolean&quot;==typeof s&amp;&amp;(l=s,s=arguments[1]||{},a=2),&quot;object&quot;==typeof s||x.isFunction(s)||(s={}),u===a&amp;&amp;(s=this,--a);u&gt;a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&amp;&amp;(l&amp;&amp;r&amp;&amp;(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&amp;&amp;x.isArray(n)?n:[]):o=n&amp;&amp;x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&amp;&amp;(s[t]=r));return s},x.extend({expando:&quot;jQuery&quot;+(p+Math.random()).replace(/\D/g,&quot;&quot;),noConflict:function(t){return e.$===x&amp;&amp;(e.$=u),t&amp;&amp;e.jQuery===x&amp;&amp;(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&amp;&amp;--x.readyWait&gt;0||(n.resolveWith(o,[x]),x.fn.trigger&amp;&amp;x(o).trigger(&quot;ready&quot;).off(&quot;ready&quot;)))},isFunction:function(e){return&quot;function&quot;===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&amp;&amp;e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&amp;&amp;isFinite(e)},type:function(e){return null==e?e+&quot;&quot;:&quot;object&quot;==typeof e||&quot;function&quot;==typeof e?l[m.call(e)]||&quot;object&quot;:typeof e},isPlainObject:function(e){if(&quot;object&quot;!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&amp;&amp;!y.call(e.constructor.prototype,&quot;isPrototypeOf&quot;))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||&quot;string&quot;!=typeof e)return null;&quot;boolean&quot;==typeof t&amp;&amp;(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&amp;&amp;[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&amp;&amp;x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||&quot;string&quot;!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,&quot;text/xml&quot;)}catch(r){t=undefined}return(!t||t.getElementsByTagName(&quot;parsererror&quot;).length)&amp;&amp;x.error(&quot;Invalid XML: &quot;+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&amp;&amp;(1===e.indexOf(&quot;use strict&quot;)?(t=o.createElement(&quot;script&quot;),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,&quot;ms-&quot;).replace(N,E)},nodeName:function(e,t){return e.nodeName&amp;&amp;e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o&gt;i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o&gt;i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?&quot;&quot;:v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&amp;&amp;(j(Object(e))?x.merge(n,&quot;string&quot;==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if(&quot;number&quot;==typeof n)for(;n&gt;i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s&gt;o;o++)r=!!t(e[o],o),n!==r&amp;&amp;i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o&gt;i;i++)r=t(e[i],i,n),null!=r&amp;&amp;(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&amp;&amp;(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return&quot;string&quot;==typeof t&amp;&amp;(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if(&quot;object&quot;===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&amp;&amp;(i=!0,x.isFunction(r)||(s=!0),l&amp;&amp;(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u&gt;a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),&quot;complete&quot;===o.readyState?setTimeout(x.ready):(o.addEventListener(&quot;DOMContentLoaded&quot;,S,!1),e.addEventListener(&quot;load&quot;,S,!1))),n.promise(t)},x.each(&quot;Boolean Number String Function Array Date RegExp Object Error&quot;.split(&quot; &quot;),function(e,t){l[&quot;[object &quot;+t+&quot;]&quot;]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&amp;&amp;t?!0:&quot;array&quot;===n||&quot;function&quot;!==n&amp;&amp;(0===t||&quot;number&quot;==typeof t&amp;&amp;t&gt;0&amp;&amp;t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v=&quot;sizzle&quot;+-new Date,b=e.document,w=0,T=0,C=at(),k=at(),N=at(),E=!1,S=function(){return 0},j=typeof undefined,D=1&lt;&lt;31,A={}.hasOwnProperty,L=[],H=L.pop,q=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n&gt;t;t++)if(this[t]===e)return t;return-1},R=&quot;checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped&quot;,M=&quot;[\\x20\\t\\r\\n\\f]&quot;,W=&quot;(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+&quot;,$=W.replace(&quot;w&quot;,&quot;w#&quot;),B=&quot;\\[&quot;+M+&quot;*(&quot;+W+&quot;)&quot;+M+&quot;*(?:([*^$|!~]?=)&quot;+M+&quot;*(?:([&#39;\&quot;])((?:\\\\.|[^\\\\])*?)\\3|(&quot;+$+&quot;)|)|)&quot;+M+&quot;*\\]&quot;,I=&quot;:(&quot;+W+&quot;)(?:\\((([&#39;\&quot;])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|&quot;+B.replace(3,8)+&quot;)*)|.*)\\)|)&quot;,z=RegExp(&quot;^&quot;+M+&quot;+|((?:^|[^\\\\])(?:\\\\.)*)&quot;+M+&quot;+$&quot;,&quot;g&quot;),_=RegExp(&quot;^&quot;+M+&quot;*,&quot;+M+&quot;*&quot;),X=RegExp(&quot;^&quot;+M+&quot;*([&gt;+~]|&quot;+M+&quot;)&quot;+M+&quot;*&quot;),U=RegExp(M+&quot;*[+~]&quot;),Y=RegExp(&quot;=&quot;+M+&quot;*([^\\]&#39;\&quot;]*)&quot;+M+&quot;*\\]&quot;,&quot;g&quot;),V=RegExp(I),G=RegExp(&quot;^&quot;+$+&quot;$&quot;),J={ID:RegExp(&quot;^#(&quot;+W+&quot;)&quot;),CLASS:RegExp(&quot;^\\.(&quot;+W+&quot;)&quot;),TAG:RegExp(&quot;^(&quot;+W.replace(&quot;w&quot;,&quot;w*&quot;)+&quot;)&quot;),ATTR:RegExp(&quot;^&quot;+B),PSEUDO:RegExp(&quot;^&quot;+I),CHILD:RegExp(&quot;^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(&quot;+M+&quot;*(even|odd|(([+-]|)(\\d*)n|)&quot;+M+&quot;*(?:([+-]|)&quot;+M+&quot;*(\\d+)|))&quot;+M+&quot;*\\)|)&quot;,&quot;i&quot;),bool:RegExp(&quot;^(?:&quot;+R+&quot;)$&quot;,&quot;i&quot;),needsContext:RegExp(&quot;^&quot;+M+&quot;*[&gt;+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(&quot;+M+&quot;*((?:-\\d)?\\d*)&quot;+M+&quot;*\\)|)(?=[^-]|$)&quot;,&quot;i&quot;)},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/&#39;|\\/g,nt=RegExp(&quot;\\\\([\\da-f]{1,6}&quot;+M+&quot;?|(&quot;+M+&quot;)|.)&quot;,&quot;ig&quot;),rt=function(e,t,n){var r=&quot;0x&quot;+t-65536;return r!==r||n?t:0&gt;r?String.fromCharCode(r+65536):String.fromCharCode(55296|r&gt;&gt;10,56320|1023&amp;r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){q.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&amp;&amp;c(t),t=t||p,r=r||[],!e||&quot;string&quot;!=typeof e)return r;if(1!==(u=t.nodeType)&amp;&amp;9!==u)return[];if(h&amp;&amp;!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&amp;&amp;(s=t.ownerDocument.getElementById(a))&amp;&amp;y(t,s)&amp;&amp;s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&amp;&amp;n.getElementsByClassName&amp;&amp;t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&amp;&amp;(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&amp;&amp;e,1===u&amp;&amp;&quot;object&quot;!==t.nodeName.toLowerCase()){f=vt(e),(g=t.getAttribute(&quot;id&quot;))?m=g.replace(tt,&quot;\\$&amp;&quot;):t.setAttribute(&quot;id&quot;,m),m=&quot;[id=&#39;&quot;+m+&quot;&#39;] &quot;,l=f.length;while(l--)f[l]=m+xt(f[l]);x=U.test(e)&amp;&amp;t.parentNode||t,w=f.join(&quot;,&quot;)}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute(&quot;id&quot;)}}}return St(e.replace(z,&quot;$1&quot;),t,r,i)}function st(e){return Q.test(e+&quot;&quot;)}function at(){var e=[];function t(n,r){return e.push(n+=&quot; &quot;)&gt;i.cacheLength&amp;&amp;delete t[e.shift()],t[n]=r}return t}function ut(e){return e[v]=!0,e}function lt(e){var t=p.createElement(&quot;div&quot;);try{return!!e(t)}catch(n){return!1}finally{t.parentNode&amp;&amp;t.parentNode.removeChild(t),t=null}}function ct(e,t,n){e=e.split(&quot;|&quot;);var r,o=e.length,s=n?null:t;while(o--)(r=i.attrHandle[e[o]])&amp;&amp;r!==t||(i.attrHandle[e[o]]=s)}function pt(e,t){var n=e.getAttributeNode(t);return n&amp;&amp;n.specified?n.value:e[t]===!0?t.toLowerCase():null}function ft(e,t){return e.getAttribute(t,&quot;type&quot;===t.toLowerCase()?1:2)}function ht(e){return&quot;input&quot;===e.nodeName.toLowerCase()?e.defaultValue:undefined}function dt(e,t){var n=t&amp;&amp;e,r=n&amp;&amp;1===e.nodeType&amp;&amp;1===t.nodeType&amp;&amp;(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function gt(e){return function(t){var n=t.nodeName.toLowerCase();return&quot;input&quot;===n&amp;&amp;t.type===e}}function mt(e){return function(t){var n=t.nodeName.toLowerCase();return(&quot;input&quot;===n||&quot;button&quot;===n)&amp;&amp;t.type===e}}function yt(e){return ut(function(t){return t=+t,ut(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&amp;&amp;(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&amp;&amp;(e.ownerDocument||e).documentElement;return t?&quot;HTML&quot;!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.parentWindow;return t!==p&amp;&amp;9===t.nodeType&amp;&amp;t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&amp;&amp;r.frameElement&amp;&amp;r.attachEvent(&quot;onbeforeunload&quot;,function(){c()}),n.attributes=lt(function(e){return e.innerHTML=&quot;&lt;a href=&#39;#&#39;&gt;&lt;/a&gt;&quot;,ct(&quot;type|href|height|width&quot;,ft,&quot;#&quot;===e.firstChild.getAttribute(&quot;href&quot;)),ct(R,pt,null==e.getAttribute(&quot;disabled&quot;)),e.className=&quot;i&quot;,!e.getAttribute(&quot;className&quot;)}),n.input=lt(function(e){return e.innerHTML=&quot;&lt;input&gt;&quot;,e.firstChild.setAttribute(&quot;value&quot;,&quot;&quot;),&quot;&quot;===e.firstChild.getAttribute(&quot;value&quot;)}),ct(&quot;value&quot;,ht,n.attributes&amp;&amp;n.input),n.getElementsByTagName=lt(function(e){return e.appendChild(t.createComment(&quot;&quot;)),!e.getElementsByTagName(&quot;*&quot;).length}),n.getElementsByClassName=lt(function(e){return e.innerHTML=&quot;&lt;div class=&#39;a&#39;&gt;&lt;/div&gt;&lt;div class=&#39;a i&#39;&gt;&lt;/div&gt;&quot;,e.firstChild.className=&quot;i&quot;,2===e.getElementsByClassName(&quot;i&quot;).length}),n.getById=lt(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&amp;&amp;h){var n=t.getElementById(e);return n&amp;&amp;n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute(&quot;id&quot;)===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&amp;&amp;e.getAttributeNode(&quot;id&quot;);return n&amp;&amp;n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if(&quot;*&quot;===e){while(n=o[i++])1===n.nodeType&amp;&amp;r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&amp;&amp;function(e,t){return typeof t.getElementsByClassName!==j&amp;&amp;h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=st(t.querySelectorAll))&amp;&amp;(lt(function(e){e.innerHTML=&quot;&lt;select&gt;&lt;option selected=&#39;&#39;&gt;&lt;/option&gt;&lt;/select&gt;&quot;,e.querySelectorAll(&quot;[selected]&quot;).length||d.push(&quot;\\[&quot;+M+&quot;*(?:value|&quot;+R+&quot;)&quot;),e.querySelectorAll(&quot;:checked&quot;).length||d.push(&quot;:checked&quot;)}),lt(function(e){var n=t.createElement(&quot;input&quot;);n.setAttribute(&quot;type&quot;,&quot;hidden&quot;),e.appendChild(n).setAttribute(&quot;t&quot;,&quot;&quot;),e.querySelectorAll(&quot;[t^=&#39;&#39;]&quot;).length&amp;&amp;d.push(&quot;[*^$]=&quot;+M+&quot;*(?:&#39;&#39;|\&quot;\&quot;)&quot;),e.querySelectorAll(&quot;:enabled&quot;).length||d.push(&quot;:enabled&quot;,&quot;:disabled&quot;),e.querySelectorAll(&quot;*,:x&quot;),d.push(&quot;,.*:&quot;)})),(n.matchesSelector=st(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&amp;&amp;lt(function(e){n.disconnectedMatch=m.call(e,&quot;div&quot;),m.call(e,&quot;[s!=&#39;&#39;]:x&quot;),g.push(&quot;!=&quot;,I)}),d=d.length&amp;&amp;RegExp(d.join(&quot;|&quot;)),g=g.length&amp;&amp;RegExp(g.join(&quot;|&quot;)),y=st(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&amp;&amp;t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&amp;&amp;16&amp;e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},n.sortDetached=lt(function(e){return 1&amp;e.compareDocumentPosition(t.createElement(&quot;div&quot;))}),S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&amp;&amp;e.compareDocumentPosition&amp;&amp;e.compareDocumentPosition(r);return i?1&amp;i||!n.sortDetached&amp;&amp;r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&amp;i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return dt(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?dt(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&amp;&amp;c(e),t=t.replace(Y,&quot;=&#39;$1&#39;]&quot;),!(!n.matchesSelector||!h||g&amp;&amp;g.test(t)||d&amp;&amp;d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&amp;&amp;11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length&gt;0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&amp;&amp;c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&amp;&amp;c(e);var r=i.attrHandle[t.toLowerCase()],o=r&amp;&amp;A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&amp;&amp;o.specified?o.value:null:o},ot.error=function(e){throw Error(&quot;Syntax error, unrecognized expression: &quot;+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&amp;&amp;e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&amp;&amp;(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n=&quot;&quot;,r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if(&quot;string&quot;==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:ut,match:J,attrHandle:{},find:{},relative:{&quot;&gt;&quot;:{dir:&quot;parentNode&quot;,first:!0},&quot; &quot;:{dir:&quot;parentNode&quot;},&quot;+&quot;:{dir:&quot;previousSibling&quot;,first:!0},&quot;~&quot;:{dir:&quot;previousSibling&quot;}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||&quot;&quot;).replace(nt,rt),&quot;~=&quot;===e[2]&amp;&amp;(e[3]=&quot; &quot;+e[3]+&quot; &quot;),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),&quot;nth&quot;===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*(&quot;even&quot;===e[3]||&quot;odd&quot;===e[3])),e[5]=+(e[7]+e[8]||&quot;odd&quot;===e[3])):e[3]&amp;&amp;ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&amp;&amp;e[2];return J.CHILD.test(e[0])?null:(e[3]&amp;&amp;e[4]!==undefined?e[2]=e[4]:n&amp;&amp;V.test(n)&amp;&amp;(t=vt(n,!0))&amp;&amp;(t=n.indexOf(&quot;)&quot;,n.length-t)-n.length)&amp;&amp;(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return&quot;*&quot;===e?function(){return!0}:function(e){return e.nodeName&amp;&amp;e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+&quot; &quot;];return t||(t=RegExp(&quot;(^|&quot;+M+&quot;)&quot;+e+&quot;(&quot;+M+&quot;|$)&quot;))&amp;&amp;C(e,function(e){return t.test(&quot;string&quot;==typeof e.className&amp;&amp;e.className||typeof e.getAttribute!==j&amp;&amp;e.getAttribute(&quot;class&quot;)||&quot;&quot;)})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?&quot;!=&quot;===t:t?(i+=&quot;&quot;,&quot;=&quot;===t?i===n:&quot;!=&quot;===t?i!==n:&quot;^=&quot;===t?n&amp;&amp;0===i.indexOf(n):&quot;*=&quot;===t?n&amp;&amp;i.indexOf(n)&gt;-1:&quot;$=&quot;===t?n&amp;&amp;i.slice(-n.length)===n:&quot;~=&quot;===t?(&quot; &quot;+i+&quot; &quot;).indexOf(n)&gt;-1:&quot;|=&quot;===t?i===n||i.slice(0,n.length+1)===n+&quot;-&quot;:!1):!0}},CHILD:function(e,t,n,r,i){var o=&quot;nth&quot;!==e.slice(0,3),s=&quot;last&quot;!==e.slice(-4),a=&quot;of-type&quot;===t;return 1===r&amp;&amp;0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?&quot;nextSibling&quot;:&quot;previousSibling&quot;,m=t.parentNode,y=a&amp;&amp;t.nodeName.toLowerCase(),x=!u&amp;&amp;!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g=&quot;only&quot;===e&amp;&amp;!d&amp;&amp;&quot;nextSibling&quot;}return!0}if(d=[s?m.firstChild:m.lastChild],s&amp;&amp;x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&amp;&amp;l[1],f=l[0]===w&amp;&amp;l[2],p=h&amp;&amp;m.childNodes[h];while(p=++h&amp;&amp;p&amp;&amp;p[g]||(f=h=0)||d.pop())if(1===p.nodeType&amp;&amp;++f&amp;&amp;p===t){c[e]=[w,h,f];break}}else if(x&amp;&amp;(l=(t[v]||(t[v]={}))[e])&amp;&amp;l[0]===w)f=l[1];else while(p=++h&amp;&amp;p&amp;&amp;p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&amp;&amp;++f&amp;&amp;(x&amp;&amp;((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&amp;&amp;f/r&gt;=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error(&quot;unsupported pseudo: &quot;+e);return r[v]?r(t):r.length&gt;1?(n=[e,e,&quot;&quot;,t],i.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ut(function(e){var t=[],n=[],r=a(e.replace(z,&quot;$1&quot;));return r[v]?ut(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&amp;&amp;(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ut(function(e){return function(t){return ot(e,t).length&gt;0}}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)&gt;-1}}),lang:ut(function(e){return G.test(e||&quot;&quot;)||ot.error(&quot;unsupported lang: &quot;+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute(&quot;xml:lang&quot;)||t.getAttribute(&quot;lang&quot;))return n=n.toLowerCase(),n===e||0===n.indexOf(e+&quot;-&quot;);while((t=t.parentNode)&amp;&amp;1===t.nodeType);return!1}}),target:function(t){var n=e.location&amp;&amp;e.location.hash;return n&amp;&amp;n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&amp;&amp;(!p.hasFocus||p.hasFocus())&amp;&amp;!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return&quot;input&quot;===t&amp;&amp;!!e.checked||&quot;option&quot;===t&amp;&amp;!!e.selected},selected:function(e){return e.parentNode&amp;&amp;e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName&gt;&quot;@&quot;||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return&quot;input&quot;===t&amp;&amp;&quot;button&quot;===e.type||&quot;button&quot;===t},text:function(e){var t;return&quot;input&quot;===e.nodeName.toLowerCase()&amp;&amp;&quot;text&quot;===e.type&amp;&amp;(null==(t=e.getAttribute(&quot;type&quot;))||t.toLowerCase()===e.type)},first:yt(function(){return[0]}),last:yt(function(e,t){return[t-1]}),eq:yt(function(e,t,n){return[0&gt;n?n+t:n]}),even:yt(function(e,t){var n=0;for(;t&gt;n;n+=2)e.push(n);return e}),odd:yt(function(e,t){var n=1;for(;t&gt;n;n+=2)e.push(n);return e}),lt:yt(function(e,t,n){var r=0&gt;n?n+t:n;for(;--r&gt;=0;)e.push(r);return e}),gt:yt(function(e,t,n){var r=0&gt;n?n+t:n;for(;t&gt;++r;)e.push(r);return e})}};for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=gt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=mt(t);function vt(e,t){var n,r,o,s,a,u,l,c=k[e+&quot; &quot;];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&amp;&amp;(r&amp;&amp;(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&amp;&amp;(n=r.shift(),o.push({value:n,type:r[0].replace(z,&quot; &quot;)}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&amp;&amp;!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function xt(e){var t=0,n=e.length,r=&quot;&quot;;for(;n&gt;t;t++)r+=e[t].value;return r}function bt(e,t,n){var i=t.dir,o=n&amp;&amp;&quot;parentNode&quot;===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+&quot; &quot;+s;if(a){while(t=t[i])if((1===t.nodeType||o)&amp;&amp;e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&amp;&amp;l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function wt(e){return e.length&gt;1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Tt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u&gt;a;a++)(o=e[a])&amp;&amp;(!n||n(o,r,i))&amp;&amp;(s.push(o),l&amp;&amp;t.push(a));return s}function Ct(e,t,n,r,i,o){return r&amp;&amp;!r[v]&amp;&amp;(r=Ct(r)),i&amp;&amp;!i[v]&amp;&amp;(i=Ct(i,o)),ut(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Et(t||&quot;*&quot;,a.nodeType?[a]:a,[]),m=!e||!o&amp;&amp;t?g:Tt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&amp;&amp;n(m,y,a,u),r){l=Tt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&amp;&amp;(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&amp;&amp;l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&amp;&amp;(l=i?P.call(o,p):f[c])&gt;-1&amp;&amp;(o[l]=!(s[l]=p))}}else y=Tt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function kt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[&quot; &quot;],l=s?1:0,c=bt(function(e){return e===t},a,!0),p=bt(function(e){return P.call(t,e)&gt;-1},a,!0),f=[function(e,n,r){return!s&amp;&amp;(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o&gt;l;l++)if(n=i.relative[e[l].type])f=[bt(wt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o&gt;r;r++)if(i.relative[e[r].type])break;return Ct(l&gt;1&amp;&amp;wt(f),l&gt;1&amp;&amp;xt(e.slice(0,l-1).concat({value:&quot; &quot;===e[l-2].type?&quot;*&quot;:&quot;&quot;})).replace(z,&quot;$1&quot;),n,r&gt;l&amp;&amp;kt(e.slice(l,r)),o&gt;r&amp;&amp;kt(e=e.slice(r)),o&gt;r&amp;&amp;xt(e))}f.push(n)}return wt(f)}function Nt(e,t){var n=0,o=t.length&gt;0,s=e.length&gt;0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x=&quot;0&quot;,b=a&amp;&amp;[],T=null!=h,C=u,k=a||s&amp;&amp;i.find.TAG(&quot;*&quot;,h&amp;&amp;l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&amp;&amp;(u=l!==p&amp;&amp;l,r=n);null!=(d=k[x]);x++){if(s&amp;&amp;d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&amp;&amp;(w=N,r=++n)}o&amp;&amp;((d=!m&amp;&amp;d)&amp;&amp;v--,a&amp;&amp;b.push(d))}if(v+=x,o&amp;&amp;x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v&gt;0)while(x--)b[x]||y[x]||(y[x]=H.call(f));y=Tt(y)}O.apply(f,y),T&amp;&amp;!a&amp;&amp;y.length&gt;0&amp;&amp;v+t.length&gt;1&amp;&amp;ot.uniqueSort(f)}return T&amp;&amp;(w=N,u=C),b};return o?ut(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+&quot; &quot;];if(!o){t||(t=vt(e)),n=t.length;while(n--)o=kt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Nt(i,r))}return o};function Et(e,t,n){var r=0,i=t.length;for(;i&gt;r;r++)ot(e,t[r],n);return n}function St(e,t,r,o){var s,u,l,c,p,f=vt(e);if(!o&amp;&amp;1===f.length){if(u=f[0]=f[0].slice(0),u.length&gt;2&amp;&amp;&quot;ID&quot;===(l=u[0]).type&amp;&amp;n.getById&amp;&amp;9===t.nodeType&amp;&amp;h&amp;&amp;i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&amp;&amp;(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&amp;&amp;t.parentNode||t))){if(u.splice(s,1),e=o.length&amp;&amp;xt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}i.pseudos.nth=i.pseudos.eq;function jt(){}jt.prototype=i.filters=i.pseudos,i.setFilters=new jt,n.sortStable=v.split(&quot;&quot;).sort(S).join(&quot;&quot;)===v,c(),[0,0].sort(S),n.detectDuplicates=E,x.find=ot,x.expr=ot.selectors,x.expr[&quot;:&quot;]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e=&quot;string&quot;==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&amp;&amp;[],l=function(p){for(t=e.memory&amp;&amp;p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&amp;&amp;o&gt;s;s++)if(a[s].apply(p[0],p[1])===!1&amp;&amp;e.stopOnFalse){t=!1;break}r=!1,a&amp;&amp;(u?u.length&amp;&amp;l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);&quot;function&quot;===r?e.unique&amp;&amp;c.has(n)||a.push(n):n&amp;&amp;n.length&amp;&amp;&quot;string&quot;!==r&amp;&amp;s(n)})})(arguments),r?o=a.length:t&amp;&amp;(i=n,l(t))}return this},remove:function(){return a&amp;&amp;x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))&gt;-1)a.splice(n,1),r&amp;&amp;(o&gt;=n&amp;&amp;o--,s&gt;=n&amp;&amp;s--)}),this},has:function(e){return e?x.inArray(e,a)&gt;-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!a||n&amp;&amp;!u||(r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[[&quot;resolve&quot;,&quot;done&quot;,x.Callbacks(&quot;once memory&quot;),&quot;resolved&quot;],[&quot;reject&quot;,&quot;fail&quot;,x.Callbacks(&quot;once memory&quot;),&quot;rejected&quot;],[&quot;notify&quot;,&quot;progress&quot;,x.Callbacks(&quot;memory&quot;)]],n=&quot;pending&quot;,r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&amp;&amp;e[t];i[o[1]](function(){var e=a&amp;&amp;a.apply(this,arguments);e&amp;&amp;x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+&quot;With&quot;](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&amp;&amp;s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+&quot;With&quot;](this===i?r:this,arguments),this},i[o[0]+&quot;With&quot;]=s.fireWith}),r.promise(i),e&amp;&amp;e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&amp;&amp;x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length&gt;1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r&gt;1)for(a=Array(r),u=Array(r),l=Array(r);r&gt;t;t++)n[t]&amp;&amp;x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement(&quot;input&quot;),r=o.createDocumentFragment(),i=o.createElement(&quot;div&quot;),s=o.createElement(&quot;select&quot;),a=s.appendChild(o.createElement(&quot;option&quot;));return n.type?(n.type=&quot;checkbox&quot;,t.checkOn=&quot;&quot;!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement(&quot;input&quot;),n.value=&quot;t&quot;,n.type=&quot;radio&quot;,t.radioValue=&quot;t&quot;===n.value,n.setAttribute(&quot;checked&quot;,&quot;t&quot;),n.setAttribute(&quot;name&quot;,&quot;t&quot;),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles=&quot;onfocusin&quot;in e,i.style.backgroundClip=&quot;content-box&quot;,i.cloneNode(!0).style.backgroundClip=&quot;&quot;,t.clearCloneStyle=&quot;content-box&quot;===i.style.backgroundClip,x(function(){var n,r,s=&quot;padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box&quot;,a=o.getElementsByTagName(&quot;body&quot;)[0];a&amp;&amp;(n=o.createElement(&quot;div&quot;),n.style.cssText=&quot;border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px&quot;,a.appendChild(n).appendChild(i),i.innerHTML=&quot;&quot;,i.style.cssText=&quot;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%&quot;,x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&amp;&amp;(t.pixelPosition=&quot;1%&quot;!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable=&quot;4px&quot;===(e.getComputedStyle(i,null)||{width:&quot;4px&quot;}).width,r=i.appendChild(o.createElement(&quot;div&quot;)),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width=&quot;0&quot;,i.style.width=&quot;1px&quot;,t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,H,q=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if(&quot;string&quot;==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){return t===undefined||t&amp;&amp;&quot;string&quot;==typeof t&amp;&amp;n===undefined?this.get(e,t):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&amp;&amp;delete this.cache[e[this.expando]]}},L=new F,H=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||H.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return H.access(e,t,n)},_removeData:function(e,t){H.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&amp;&amp;(s=L.get(i),1===i.nodeType&amp;&amp;!H.get(i,&quot;hasDataAttrs&quot;))){for(n=i.attributes;n.length&gt;o;o++)r=n[o].name,0===r.indexOf(&quot;data-&quot;)&amp;&amp;(r=x.camelCase(r.slice(5)),P(i,r,s[r]));H.set(i,&quot;hasDataAttrs&quot;,!0)}return s}return&quot;object&quot;==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&amp;&amp;t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf(&quot;-&quot;)&amp;&amp;n!==undefined&amp;&amp;L.set(this,e,t)})},null,t,arguments.length&gt;1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&amp;&amp;1===e.nodeType)if(r=&quot;data-&quot;+t.replace(O,&quot;-$1&quot;).toLowerCase(),n=e.getAttribute(r),&quot;string&quot;==typeof n){try{n=&quot;true&quot;===n?!0:&quot;false&quot;===n?!1:&quot;null&quot;===n?null:+n+&quot;&quot;===n?+n:q.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||&quot;fx&quot;)+&quot;queue&quot;,r=H.get(e,t),n&amp;&amp;(!r||x.isArray(n)?r=H.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||&quot;fx&quot;;var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)};&quot;inprogress&quot;===i&amp;&amp;(i=n.shift(),r--),i&amp;&amp;(&quot;fx&quot;===t&amp;&amp;n.unshift(&quot;inprogress&quot;),delete o.stop,i.call(e,s,o)),!r&amp;&amp;o&amp;&amp;o.empty.fire()</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">},_queueHooks:function(e,t){var n=t+&quot;queueHooks&quot;;return H.get(e,n)||H.access(e,n,{empty:x.Callbacks(&quot;once memory&quot;).add(function(){H.remove(e,[t+&quot;queue&quot;,n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return&quot;string&quot;!=typeof e&amp;&amp;(t=e,e=&quot;fx&quot;,n--),n&gt;arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),&quot;fx&quot;===e&amp;&amp;&quot;inprogress&quot;!==n[0]&amp;&amp;x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||&quot;fx&quot;,this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||&quot;fx&quot;,[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};&quot;string&quot;!=typeof e&amp;&amp;(t=e,e=undefined),e=e||&quot;fx&quot;;while(s--)n=H.get(o[s],e+&quot;queueHooks&quot;),n&amp;&amp;n.empty&amp;&amp;(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length&gt;1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length&gt;1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=&quot;string&quot;==typeof e&amp;&amp;e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||&quot;&quot;).match(w)||[];a&gt;s;s++)if(n=this[s],r=1===n.nodeType&amp;&amp;(n.className?(&quot; &quot;+n.className+&quot; &quot;).replace(W,&quot; &quot;):&quot; &quot;)){o=0;while(i=t[o++])0&gt;r.indexOf(&quot; &quot;+i+&quot; &quot;)&amp;&amp;(r+=i+&quot; &quot;);n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||&quot;string&quot;==typeof e&amp;&amp;e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||&quot;&quot;).match(w)||[];a&gt;s;s++)if(n=this[s],r=1===n.nodeType&amp;&amp;(n.className?(&quot; &quot;+n.className+&quot; &quot;).replace(W,&quot; &quot;):&quot;&quot;)){o=0;while(i=t[o++])while(r.indexOf(&quot; &quot;+i+&quot; &quot;)&gt;=0)r=r.replace(&quot; &quot;+i+&quot; &quot;,&quot; &quot;);n.className=e?x.trim(r):&quot;&quot;}return this},toggleClass:function(e,t){var n=typeof e,i=&quot;boolean&quot;==typeof t;return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(&quot;string&quot;===n){var o,s=0,a=x(this),u=t,l=e.match(w)||[];while(o=l[s++])u=i?u:!a.hasClass(o),a[u?&quot;addClass&quot;:&quot;removeClass&quot;](o)}else(n===r||&quot;boolean&quot;===n)&amp;&amp;(this.className&amp;&amp;H.set(this,&quot;__className__&quot;,this.className),this.className=this.className||e===!1?&quot;&quot;:H.get(this,&quot;__className__&quot;)||&quot;&quot;)})},hasClass:function(e){var t=&quot; &quot;+e+&quot; &quot;,n=0,r=this.length;for(;r&gt;n;n++)if(1===this[n].nodeType&amp;&amp;(&quot; &quot;+this[n].className+&quot; &quot;).replace(W,&quot; &quot;).indexOf(t)&gt;=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&amp;&amp;(i=r?e.call(this,n,x(this).val()):e,null==i?i=&quot;&quot;:&quot;number&quot;==typeof i?i+=&quot;&quot;:x.isArray(i)&amp;&amp;(i=x.map(i,function(e){return null==e?&quot;&quot;:e+&quot;&quot;})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&amp;&amp;&quot;set&quot;in t&amp;&amp;t.set(this,i,&quot;value&quot;)!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&amp;&amp;&quot;get&quot;in t&amp;&amp;(n=t.get(i,&quot;value&quot;))!==undefined?n:(n=i.value,&quot;string&quot;==typeof n?n.replace($,&quot;&quot;):null==n?&quot;&quot;:n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o=&quot;select-one&quot;===e.type||0&gt;i,s=o?null:[],a=o?i+1:r.length,u=0&gt;i?a:o?i:0;for(;a&gt;u;u++)if(n=r[u],!(!n.selected&amp;&amp;u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute(&quot;disabled&quot;))||n.parentNode.disabled&amp;&amp;x.nodeName(n.parentNode,&quot;optgroup&quot;))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)&gt;=0)&amp;&amp;(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&amp;&amp;3!==s&amp;&amp;8!==s&amp;&amp;2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&amp;&amp;x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&amp;&amp;&quot;get&quot;in i&amp;&amp;null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&amp;&amp;&quot;set&quot;in i&amp;&amp;(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+&quot;&quot;),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&amp;&amp;t.match(w);if(o&amp;&amp;1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&amp;&amp;(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&amp;&amp;&quot;radio&quot;===t&amp;&amp;x.nodeName(e,&quot;input&quot;)){var n=e.value;return e.setAttribute(&quot;type&quot;,t),n&amp;&amp;(e.value=n),t}}}},propFix:{&quot;for&quot;:&quot;htmlFor&quot;,&quot;class&quot;:&quot;className&quot;},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&amp;&amp;3!==s&amp;&amp;8!==s&amp;&amp;2!==s)return o=1!==s||!x.isXMLDoc(e),o&amp;&amp;(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&amp;&amp;&quot;set&quot;in i&amp;&amp;(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&amp;&amp;&quot;get&quot;in i&amp;&amp;null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute(&quot;tabindex&quot;)||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&amp;&amp;t.parentNode&amp;&amp;t.parentNode.selectedIndex,null}}),x.each([&quot;tabIndex&quot;,&quot;readOnly&quot;,&quot;maxLength&quot;,&quot;cellSpacing&quot;,&quot;cellPadding&quot;,&quot;rowSpan&quot;,&quot;colSpan&quot;,&quot;useMap&quot;,&quot;frameBorder&quot;,&quot;contentEditable&quot;],function(){x.propFix[this.toLowerCase()]=this}),x.each([&quot;radio&quot;,&quot;checkbox&quot;],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)&gt;=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute(&quot;value&quot;)?&quot;on&quot;:e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=H.get(e);if(y){n.handler&amp;&amp;(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&amp;&amp;x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||&quot;&quot;).match(w)||[&quot;&quot;],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||&quot;&quot;).split(&quot;.&quot;).sort(),d&amp;&amp;(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&amp;&amp;x.expr.match.needsContext.test(o),namespace:g.join(&quot;.&quot;)},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&amp;&amp;f.setup.call(e,i,g,a)!==!1||e.addEventListener&amp;&amp;e.addEventListener(d,a,!1)),f.add&amp;&amp;(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=H.hasData(e)&amp;&amp;H.get(e);if(m&amp;&amp;(u=m.events)){t=(t||&quot;&quot;).match(w)||[&quot;&quot;],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||&quot;&quot;).split(&quot;.&quot;).sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&amp;&amp;RegExp(&quot;(^|\\.)&quot;+d.join(&quot;\\.(?:.*\\.|)&quot;)+&quot;(\\.|$)&quot;),s=o=f.length;while(o--)c=f[o],!i&amp;&amp;g!==c.origType||n&amp;&amp;n.guid!==c.guid||a&amp;&amp;!a.test(c.namespace)||r&amp;&amp;r!==c.selector&amp;&amp;(&quot;**&quot;!==r||!c.selector)||(f.splice(o,1),c.selector&amp;&amp;f.delegateCount--,p.remove&amp;&amp;p.remove.call(e,c));s&amp;&amp;!f.length&amp;&amp;(p.teardown&amp;&amp;p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&amp;&amp;(delete m.handle,H.remove(e,&quot;events&quot;))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,&quot;type&quot;)?t.type:t,g=y.call(t,&quot;namespace&quot;)?t.namespace.split(&quot;.&quot;):[];if(a=u=r=r||o,3!==r.nodeType&amp;&amp;8!==r.nodeType&amp;&amp;!_.test(d+x.event.triggered)&amp;&amp;(d.indexOf(&quot;.&quot;)&gt;=0&amp;&amp;(g=d.split(&quot;.&quot;),d=g.shift(),g.sort()),c=0&gt;d.indexOf(&quot;:&quot;)&amp;&amp;&quot;on&quot;+d,t=t[x.expando]?t:new x.Event(d,&quot;object&quot;==typeof t&amp;&amp;t),t.isTrigger=i?2:3,t.namespace=g.join(&quot;.&quot;),t.namespace_re=t.namespace?RegExp(&quot;(^|\\.)&quot;+g.join(&quot;\\.(?:.*\\.|)&quot;)+&quot;(\\.|$)&quot;):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&amp;&amp;!f.noBubble&amp;&amp;!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&amp;&amp;h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&amp;&amp;!t.isPropagationStopped())t.type=s&gt;1?l:f.bindType||d,p=(H.get(a,&quot;events&quot;)||{})[t.type]&amp;&amp;H.get(a,&quot;handle&quot;),p&amp;&amp;p.apply(a,n),p=c&amp;&amp;a[c],p&amp;&amp;x.acceptData(a)&amp;&amp;p.apply&amp;&amp;p.apply(a,n)===!1&amp;&amp;t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&amp;&amp;f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&amp;&amp;x.isFunction(r[d])&amp;&amp;!x.isWindow(r)&amp;&amp;(u=r[c],u&amp;&amp;(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&amp;&amp;(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(H.get(this,&quot;events&quot;)||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&amp;&amp;!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&amp;&amp;!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&amp;&amp;(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&amp;&amp;(e.result=r)===!1&amp;&amp;(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&amp;&amp;l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&amp;&amp;u.nodeType&amp;&amp;(!e.button||&quot;click&quot;!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||&quot;click&quot;!==e.type){for(r=[],n=0;a&gt;n;n++)o=t[n],i=o.selector+&quot; &quot;,r[i]===undefined&amp;&amp;(r[i]=o.needsContext?x(i,this).index(u)&gt;=0:x.find(i,this,null,[u]).length),r[i]&amp;&amp;r.push(o);r.length&amp;&amp;s.push({elem:u,handlers:r})}return t.length&gt;a&amp;&amp;s.push({elem:this,handlers:t.slice(a)}),s},props:&quot;altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which&quot;.split(&quot; &quot;),fixHooks:{},keyHooks:{props:&quot;char charCode key keyCode&quot;.split(&quot; &quot;),filter:function(e,t){return null==e.which&amp;&amp;(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:&quot;button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement&quot;.split(&quot; &quot;),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&amp;&amp;null!=t.clientX&amp;&amp;(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&amp;&amp;r.scrollLeft||i&amp;&amp;i.scrollLeft||0)-(r&amp;&amp;r.clientLeft||i&amp;&amp;i.clientLeft||0),e.pageY=t.clientY+(r&amp;&amp;r.scrollTop||i&amp;&amp;i.scrollTop||0)-(r&amp;&amp;r.clientTop||i&amp;&amp;i.clientTop||0)),e.which||s===undefined||(e.which=1&amp;s?1:2&amp;s?3:4&amp;s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&amp;&amp;(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&amp;&amp;this.focus?(this.focus(),!1):undefined},delegateType:&quot;focusin&quot;},blur:{trigger:function(){return this===V()&amp;&amp;this.blur?(this.blur(),!1):undefined},delegateType:&quot;focusout&quot;},click:{trigger:function(){return&quot;checkbox&quot;===this.type&amp;&amp;this.click&amp;&amp;x.nodeName(this,&quot;input&quot;)?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,&quot;a&quot;)}},beforeunload:{postDispatch:function(e){e.result!==undefined&amp;&amp;(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&amp;&amp;n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&amp;&amp;e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&amp;&amp;e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&amp;&amp;e.getPreventDefault()?U:Y):this.type=e,t&amp;&amp;x.extend(this,t),this.timeStamp=e&amp;&amp;e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&amp;&amp;e.preventDefault&amp;&amp;e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&amp;&amp;e.stopPropagation&amp;&amp;e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:&quot;mouseover&quot;,mouseleave:&quot;mouseout&quot;},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&amp;&amp;!x.contains(r,i))&amp;&amp;(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:&quot;focusin&quot;,blur:&quot;focusout&quot;},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&amp;&amp;o.addEventListener(e,r,!0)},teardown:function(){0===--n&amp;&amp;o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if(&quot;object&quot;==typeof e){&quot;string&quot;!=typeof t&amp;&amp;(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&amp;&amp;null==r?(r=t,n=t=undefined):null==r&amp;&amp;(&quot;string&quot;==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&amp;&amp;(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&amp;&amp;e.preventDefault&amp;&amp;e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+&quot;.&quot;+r.namespace:r.origType,r.selector,r.handler),this;if(&quot;object&quot;==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||&quot;function&quot;==typeof t)&amp;&amp;(n=t,t=undefined),n===!1&amp;&amp;(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if(&quot;string&quot;!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i&gt;t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i&gt;t;t++)x.find(e,r[t],n);return n=this.pushStack(i&gt;1?x.unique(n):n),n.selector=this.selector?this.selector+&quot; &quot;+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n&gt;e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,&quot;string&quot;==typeof e&amp;&amp;Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||&quot;string&quot;!=typeof e?x(e,t||this.context):0;for(;i&gt;r;r++)for(n=this[r];n&amp;&amp;n!==t;n=n.parentNode)if(11&gt;n.nodeType&amp;&amp;(s?s.index(n)&gt;-1:1===n.nodeType&amp;&amp;x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length&gt;1?x.unique(o):o)},index:function(e){return e?&quot;string&quot;==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&amp;&amp;this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n=&quot;string&quot;==typeof e?x(e,t):x.makeArray(e&amp;&amp;e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&amp;&amp;1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&amp;&amp;11!==t.nodeType?t:null},parents:function(e){return x.dir(e,&quot;parentNode&quot;)},parentsUntil:function(e,t,n){return x.dir(e,&quot;parentNode&quot;,n)},next:function(e){return Z(e,&quot;nextSibling&quot;)},prev:function(e){return Z(e,&quot;previousSibling&quot;)},nextAll:function(e){return x.dir(e,&quot;nextSibling&quot;)},prevAll:function(e){return x.dir(e,&quot;previousSibling&quot;)},nextUntil:function(e,t,n){return x.dir(e,&quot;nextSibling&quot;,n)},prevUntil:function(e,t,n){return x.dir(e,&quot;previousSibling&quot;,n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return&quot;Until&quot;!==e.slice(-5)&amp;&amp;(r=n),r&amp;&amp;&quot;string&quot;==typeof r&amp;&amp;(i=x.filter(r,i)),this.length&gt;1&amp;&amp;(K[e]||x.unique(i),J.test(e)&amp;&amp;i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&amp;&amp;(e=&quot;:not(&quot;+e+&quot;)&quot;),1===t.length&amp;&amp;1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&amp;&amp;9!==e.nodeType)if(1===e.nodeType){if(i&amp;&amp;x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&amp;&amp;e!==t&amp;&amp;n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if(&quot;string&quot;==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)&gt;=0!==n})}var tt=/&lt;(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^&gt;]*)\/&gt;/gi,nt=/&lt;([\w:]+)/,rt=/&lt;|&amp;#?\w+;/,it=/&lt;(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*&lt;!(?:\[CDATA\[|--)|(?:\]\]|--)&gt;\s*$/g,ct={option:[1,&quot;&lt;select multiple=&#39;multiple&#39;&gt;&quot;,&quot;&lt;/select&gt;&quot;],thead:[1,&quot;&lt;table&gt;&quot;,&quot;&lt;/table&gt;&quot;],col:[2,&quot;&lt;table&gt;&lt;colgroup&gt;&quot;,&quot;&lt;/colgroup&gt;&lt;/table&gt;&quot;],tr:[2,&quot;&lt;table&gt;&lt;tbody&gt;&quot;,&quot;&lt;/tbody&gt;&lt;/table&gt;&quot;],td:[3,&quot;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&quot;,&quot;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&quot;],_default:[0,&quot;&quot;,&quot;&quot;]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&amp;&amp;this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&amp;&amp;this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&amp;&amp;this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&amp;&amp;(t&amp;&amp;x.contains(n.ownerDocument,n)&amp;&amp;dt(mt(n,&quot;script&quot;)),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&amp;&amp;(x.cleanData(mt(e,!1)),e.textContent=&quot;&quot;);return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&amp;&amp;1===t.nodeType)return t.innerHTML;if(&quot;string&quot;==typeof e&amp;&amp;!it.test(e)&amp;&amp;!ct[(nt.exec(e)||[&quot;&quot;,&quot;&quot;])[1].toLowerCase()]){e=e.replace(tt,&quot;&lt;$1&gt;&lt;/$2&gt;&quot;);try{for(;r&gt;n;n++)t=this[n]||{},1===t.nodeType&amp;&amp;(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&amp;&amp;this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&amp;&amp;(r&amp;&amp;r.parentNode!==i&amp;&amp;(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1&gt;=c||&quot;string&quot;!=typeof d||x.support.checkClone)&amp;&amp;st.test(d))return this.each(function(r){var i=p.eq(r);g&amp;&amp;(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&amp;&amp;(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&amp;&amp;this),i=r.firstChild,1===r.childNodes.length&amp;&amp;(r=i),i)){for(o=x.map(mt(r,&quot;script&quot;),ft),s=o.length;c&gt;l;l++)a=r,l!==h&amp;&amp;(a=x.clone(a,!0,!0),s&amp;&amp;x.merge(o,mt(a,&quot;script&quot;))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s&gt;l;l++)a=o[l],at.test(a.type||&quot;&quot;)&amp;&amp;!H.access(a,&quot;globalEval&quot;)&amp;&amp;x.contains(u,a)&amp;&amp;(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,&quot;&quot;)))}return this}}),x.each({appendTo:&quot;append&quot;,prependTo:&quot;prepend&quot;,insertBefore:&quot;before&quot;,insertAfter:&quot;after&quot;,replaceAll:&quot;replaceWith&quot;},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o&gt;=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&amp;&amp;11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i&gt;r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i&gt;r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,&quot;script&quot;),s.length&gt;0&amp;&amp;dt(s,!u&amp;&amp;mt(e,&quot;script&quot;)),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p&gt;c;c++)if(i=e[c],i||0===i)if(&quot;object&quot;===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement(&quot;div&quot;)),s=(nt.exec(i)||[&quot;&quot;,&quot;&quot;])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,&quot;&lt;$1&gt;&lt;/$2&gt;&quot;)+a[2],l=a[0];while(l--)o=o.firstChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=&quot;&quot;}else h.push(t.createTextNode(i));f.textContent=&quot;&quot;,c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&amp;&amp;(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),&quot;script&quot;),u&amp;&amp;dt(o),n)){l=0;while(i=o[l++])at.test(i.type||&quot;&quot;)&amp;&amp;n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&amp;&amp;(o=n[H.expando],o&amp;&amp;(t=H.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);H.cache[o]&amp;&amp;delete H.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:&quot;GET&quot;,dataType:&quot;script&quot;,async:!1,global:!1,&quot;throws&quot;:!0})}});function pt(e,t){return x.nodeName(e,&quot;table&quot;)&amp;&amp;x.nodeName(1===t.nodeType?t:t.firstChild,&quot;tr&quot;)?e.getElementsByTagName(&quot;tbody&quot;)[0]||e.appendChild(e.ownerDocument.createElement(&quot;tbody&quot;)):e}function ft(e){return e.type=(null!==e.getAttribute(&quot;type&quot;))+&quot;/&quot;+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute(&quot;type&quot;),e}function dt(e,t){var n=e.length,r=0;for(;n&gt;r;r++)H.set(e[r],&quot;globalEval&quot;,!t||H.get(t[r],&quot;globalEval&quot;))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(H.hasData(e)&amp;&amp;(o=H.access(e),s=H.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r&gt;n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&amp;&amp;(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||&quot;*&quot;):e.querySelectorAll?e.querySelectorAll(t||&quot;*&quot;):[];return t===undefined||t&amp;&amp;x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();&quot;input&quot;===n&amp;&amp;ot.test(e.type)?t.checked=e.checked:(&quot;input&quot;===n||&quot;textarea&quot;===n)&amp;&amp;(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&amp;&amp;(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&amp;&amp;t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,&quot;body&quot;)||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp(&quot;^(&quot;+b+&quot;)(.*)$&quot;,&quot;i&quot;),Ct=RegExp(&quot;^(&quot;+b+&quot;)(?!px)[a-z%]+$&quot;,&quot;i&quot;),kt=RegExp(&quot;^([+-])=(&quot;+b+&quot;)&quot;,&quot;i&quot;),Nt={BODY:&quot;block&quot;},Et={position:&quot;absolute&quot;,visibility:&quot;hidden&quot;,display:&quot;block&quot;},St={letterSpacing:0,fontWeight:400},jt=[&quot;Top&quot;,&quot;Right&quot;,&quot;Bottom&quot;,&quot;Left&quot;],Dt=[&quot;Webkit&quot;,&quot;O&quot;,&quot;Moz&quot;,&quot;ms&quot;];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,&quot;none&quot;===x.css(e,&quot;display&quot;)||!x.contains(e.ownerDocument,e)}function Ht(t){return e.getComputedStyle(t,null)}function qt(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a&gt;s;s++)r=e[s],r.style&amp;&amp;(o[s]=H.get(r,&quot;olddisplay&quot;),n=r.style.display,t?(o[s]||&quot;none&quot;!==n||(r.style.display=&quot;&quot;),&quot;&quot;===r.style.display&amp;&amp;Lt(r)&amp;&amp;(o[s]=H.access(r,&quot;olddisplay&quot;,Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&amp;&amp;&quot;none&quot;!==n||!i)&amp;&amp;H.set(r,&quot;olddisplay&quot;,i?n:x.css(r,&quot;display&quot;))));for(s=0;a&gt;s;s++)r=e[s],r.style&amp;&amp;(t&amp;&amp;&quot;none&quot;!==r.style.display&amp;&amp;&quot;&quot;!==r.style.display||(r.style.display=t?o[s]||&quot;&quot;:&quot;none&quot;));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=Ht(e),i=t.length;i&gt;s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length&gt;1)},show:function(){return qt(this,!0)},hide:function(){return qt(this)},toggle:function(e){var t=&quot;boolean&quot;==typeof e;return this.each(function(){(t?e:Lt(this))?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,&quot;opacity&quot;);return&quot;&quot;===n?&quot;1&quot;:n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{&quot;float&quot;:&quot;cssFloat&quot;},style:function(e,t,n,r){if(e&amp;&amp;3!==e.nodeType&amp;&amp;8!==e.nodeType&amp;&amp;e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&amp;&amp;&quot;get&quot;in s&amp;&amp;(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,&quot;string&quot;===o&amp;&amp;(i=kt.exec(n))&amp;&amp;(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o=&quot;number&quot;),null==n||&quot;number&quot;===o&amp;&amp;isNaN(n)||(&quot;number&quot;!==o||x.cssNumber[a]||(n+=&quot;px&quot;),x.support.clearCloneStyle||&quot;&quot;!==n||0!==t.indexOf(&quot;background&quot;)||(u[t]=&quot;inherit&quot;),s&amp;&amp;&quot;set&quot;in s&amp;&amp;(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&amp;&amp;&quot;get&quot;in s&amp;&amp;(i=s.get(e,!0,n)),i===undefined&amp;&amp;(i=vt(e,t,r)),&quot;normal&quot;===i&amp;&amp;t in St&amp;&amp;(i=St[t]),&quot;&quot;===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||Ht(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&amp;&amp;(&quot;&quot;!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&amp;&amp;wt.test(t)&amp;&amp;(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||&quot;px&quot;):t}function Ft(e,t,n,r,i){var o=n===(r?&quot;border&quot;:&quot;content&quot;)?4:&quot;width&quot;===t?1:0,s=0;for(;4&gt;o;o+=2)&quot;margin&quot;===n&amp;&amp;(s+=x.css(e,n+jt[o],!0,i)),r?(&quot;content&quot;===n&amp;&amp;(s-=x.css(e,&quot;padding&quot;+jt[o],!0,i)),&quot;margin&quot;!==n&amp;&amp;(s-=x.css(e,&quot;border&quot;+jt[o]+&quot;Width&quot;,!0,i))):(s+=x.css(e,&quot;padding&quot;+jt[o],!0,i),&quot;padding&quot;!==n&amp;&amp;(s+=x.css(e,&quot;border&quot;+jt[o]+&quot;Width&quot;,!0,i)));return s}function Pt(e,t,n){var r=!0,i=&quot;width&quot;===t?e.offsetWidth:e.offsetHeight,o=Ht(e),s=x.support.boxSizing&amp;&amp;&quot;border-box&quot;===x.css(e,&quot;boxSizing&quot;,!1,o);if(0&gt;=i||null==i){if(i=vt(e,t,o),(0&gt;i||null==i)&amp;&amp;(i=e.style[t]),Ct.test(i))return i;r=s&amp;&amp;(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?&quot;border&quot;:&quot;content&quot;),r,o)+&quot;px&quot;}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),&quot;none&quot;!==n&amp;&amp;n||(xt=(xt||x(&quot;&lt;iframe frameborder=&#39;0&#39; width=&#39;0&#39; height=&#39;0&#39;/&gt;&quot;).css(&quot;cssText&quot;,&quot;display:block !important&quot;)).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write(&quot;&lt;!doctype html&gt;&lt;html&gt;&lt;body&gt;&quot;),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],&quot;display&quot;);return n.remove(),r}x.each([&quot;height&quot;,&quot;width&quot;],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&amp;&amp;bt.test(x.css(e,&quot;display&quot;))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&amp;&amp;Ht(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&amp;&amp;&quot;border-box&quot;===x.css(e,&quot;boxSizing&quot;,!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:&quot;inline-block&quot;},vt,[e,&quot;marginRight&quot;]):undefined}}),!x.support.pixelPosition&amp;&amp;x.fn.position&amp;&amp;x.each([&quot;top&quot;,&quot;left&quot;],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+&quot;px&quot;:n):undefined}}})}),x.expr&amp;&amp;x.expr.filters&amp;&amp;(x.expr.filters.hidden=function(e){return 0&gt;=e.offsetWidth&amp;&amp;0&gt;=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:&quot;&quot;,padding:&quot;&quot;,border:&quot;Width&quot;},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o=&quot;string&quot;==typeof n?n.split(&quot; &quot;):[n];for(;4&gt;r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,&quot;elements&quot;);return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&amp;&amp;!x(this).is(&quot;:disabled&quot;)&amp;&amp;zt.test(this.nodeName)&amp;&amp;!It.test(e)&amp;&amp;(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,&quot;\r\n&quot;)}}):{name:t.name,value:n.replace(Bt,&quot;\r\n&quot;)}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?&quot;&quot;:t,r[r.length]=encodeURIComponent(e)+&quot;=&quot;+encodeURIComponent(t)};if(t===undefined&amp;&amp;(t=x.ajaxSettings&amp;&amp;x.ajaxSettings.traditional),x.isArray(e)||e.jquery&amp;&amp;!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join(&quot;&amp;&quot;).replace(Wt,&quot;+&quot;)};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+&quot;[&quot;+(&quot;object&quot;==typeof i?t:&quot;&quot;)+&quot;]&quot;,i,n,r)});else if(n||&quot;object&quot;!==x.type(t))r(e,t);else for(i in t)_t(e+&quot;[&quot;+i+&quot;]&quot;,t[i],n,r)}x.each(&quot;blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu&quot;.split(&quot; &quot;),function(e,t){x.fn[t]=function(e,n){return arguments.length&gt;0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,&quot;**&quot;):this.off(t,e||&quot;**&quot;,n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&amp;])_=[^&amp;]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn=&quot;*/&quot;.concat(&quot;*&quot;);</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">try{Ut=i.href}catch(an){Ut=o.createElement(&quot;a&quot;),Ut.href=&quot;&quot;,Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){&quot;string&quot;!=typeof t&amp;&amp;(n=t,t=&quot;*&quot;);var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])&quot;+&quot;===r[0]?(r=r.slice(1)||&quot;*&quot;,(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return&quot;string&quot;!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i[&quot;*&quot;]&amp;&amp;s(&quot;*&quot;)}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&amp;&amp;((i[n]?e:r||(r={}))[n]=t[n]);return r&amp;&amp;x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if(&quot;string&quot;!=typeof e&amp;&amp;nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(&quot; &quot;);return a&gt;=0&amp;&amp;(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&amp;&amp;&quot;object&quot;==typeof t&amp;&amp;(i=&quot;POST&quot;),s.length&gt;0&amp;&amp;x.ajax({url:e,type:i,dataType:&quot;html&quot;,data:t}).done(function(e){o=arguments,s.html(r?x(&quot;&lt;div&gt;&quot;).append(x.parseHTML(e)).find(r):e)}).complete(n&amp;&amp;function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each([&quot;ajaxStart&quot;,&quot;ajaxStop&quot;,&quot;ajaxComplete&quot;,&quot;ajaxError&quot;,&quot;ajaxSuccess&quot;,&quot;ajaxSend&quot;],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:&quot;GET&quot;,isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:&quot;application/x-www-form-urlencoded; charset=UTF-8&quot;,accepts:{&quot;*&quot;:sn,text:&quot;text/plain&quot;,html:&quot;text/html&quot;,xml:&quot;application/xml, text/xml&quot;,json:&quot;application/json, text/javascript&quot;},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:&quot;responseXML&quot;,text:&quot;responseText&quot;,json:&quot;responseJSON&quot;},converters:{&quot;* text&quot;:String,&quot;text html&quot;:!0,&quot;text json&quot;:x.parseJSON,&quot;text xml&quot;:x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){&quot;object&quot;==typeof e&amp;&amp;(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&amp;&amp;(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks(&quot;once memory&quot;),g=c.statusCode||{},m={},y={},v=0,b=&quot;canceled&quot;,T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2&gt;v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&amp;&amp;n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+&quot;&quot;).replace(Gt,&quot;&quot;).replace(en,Xt[1]+&quot;//&quot;),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||&quot;*&quot;).toLowerCase().match(w)||[&quot;&quot;],null==c.crossDomain&amp;&amp;(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&amp;&amp;a[2]===Xt[2]&amp;&amp;(a[3]||(&quot;http:&quot;===a[1]?&quot;80&quot;:&quot;443&quot;))===(Xt[3]||(&quot;http:&quot;===Xt[1]?&quot;80&quot;:&quot;443&quot;)))),c.data&amp;&amp;c.processData&amp;&amp;&quot;string&quot;!=typeof c.data&amp;&amp;(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&amp;&amp;0===x.active++&amp;&amp;x.event.trigger(&quot;ajaxStart&quot;),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&amp;&amp;(r=c.url+=(Vt.test(r)?&quot;&amp;&quot;:&quot;?&quot;)+c.data,delete c.data),c.cache===!1&amp;&amp;(c.url=Jt.test(r)?r.replace(Jt,&quot;$1_=&quot;+Yt++):r+(Vt.test(r)?&quot;&amp;&quot;:&quot;?&quot;)+&quot;_=&quot;+Yt++)),c.ifModified&amp;&amp;(x.lastModified[r]&amp;&amp;T.setRequestHeader(&quot;If-Modified-Since&quot;,x.lastModified[r]),x.etag[r]&amp;&amp;T.setRequestHeader(&quot;If-None-Match&quot;,x.etag[r])),(c.data&amp;&amp;c.hasContent&amp;&amp;c.contentType!==!1||t.contentType)&amp;&amp;T.setRequestHeader(&quot;Content-Type&quot;,c.contentType),T.setRequestHeader(&quot;Accept&quot;,c.dataTypes[0]&amp;&amp;c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(&quot;*&quot;!==c.dataTypes[0]?&quot;, &quot;+sn+&quot;; q=0.01&quot;:&quot;&quot;):c.accepts[&quot;*&quot;]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&amp;&amp;(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b=&quot;abort&quot;;for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&amp;&amp;f.trigger(&quot;ajaxSend&quot;,[T,c]),c.async&amp;&amp;c.timeout&gt;0&amp;&amp;(s=setTimeout(function(){T.abort(&quot;timeout&quot;)},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2&gt;v))throw C;k(-1,C)}}else k(-1,&quot;No Transport&quot;);function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&amp;&amp;(v=2,s&amp;&amp;clearTimeout(s),n=undefined,i=a||&quot;&quot;,T.readyState=e&gt;0?4:0,l=e&gt;=200&amp;&amp;300&gt;e||304===e,o&amp;&amp;(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&amp;&amp;(w=T.getResponseHeader(&quot;Last-Modified&quot;),w&amp;&amp;(x.lastModified[r]=w),w=T.getResponseHeader(&quot;etag&quot;),w&amp;&amp;(x.etag[r]=w)),204===e||&quot;HEAD&quot;===c.type?C=&quot;nocontent&quot;:304===e?C=&quot;notmodified&quot;:(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&amp;&amp;(C=&quot;error&quot;,0&gt;e&amp;&amp;(e=0))),T.status=e,T.statusText=(t||C)+&quot;&quot;,l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&amp;&amp;f.trigger(l?&quot;ajaxSuccess&quot;:&quot;ajaxError&quot;,[T,c,l?m:y]),d.fireWith(p,[T,C]),u&amp;&amp;(f.trigger(&quot;ajaxComplete&quot;,[T,c]),--x.active||x.event.trigger(&quot;ajaxStop&quot;)))}return T},getJSON:function(e,t,n){return x.get(e,t,n,&quot;json&quot;)},getScript:function(e,t){return x.get(e,undefined,t,&quot;script&quot;)}}),x.each([&quot;get&quot;,&quot;post&quot;],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&amp;&amp;(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while(&quot;*&quot;===u[0])u.shift(),r===undefined&amp;&amp;(r=e.mimeType||t.getResponseHeader(&quot;Content-Type&quot;));if(r)for(i in a)if(a[i]&amp;&amp;a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+&quot; &quot;+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&amp;&amp;u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&amp;&amp;(n[e.responseFields[o]]=t),!u&amp;&amp;r&amp;&amp;e.dataFilter&amp;&amp;(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if(&quot;*&quot;===o)o=u;else if(&quot;*&quot;!==u&amp;&amp;u!==o){if(s=l[u+&quot; &quot;+o]||l[&quot;* &quot;+o],!s)for(i in l)if(a=i.split(&quot; &quot;),a[1]===o&amp;&amp;(s=l[u+&quot; &quot;+a[0]]||l[&quot;* &quot;+a[0]])){s===!0?s=l[i]:l[i]!==!0&amp;&amp;(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&amp;&amp;e[&quot;throws&quot;])t=s(t);else try{t=s(t)}catch(p){return{state:&quot;parsererror&quot;,error:s?p:&quot;No conversion from &quot;+u+&quot; to &quot;+o}}}return{state:&quot;success&quot;,data:t}}x.ajaxSetup({accepts:{script:&quot;text/javascript, application/javascript, application/ecmascript, application/x-ecmascript&quot;},contents:{script:/(?:java|ecma)script/},converters:{&quot;text script&quot;:function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter(&quot;script&quot;,function(e){e.cache===undefined&amp;&amp;(e.cache=!1),e.crossDomain&amp;&amp;(e.type=&quot;GET&quot;)}),x.ajaxTransport(&quot;script&quot;,function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x(&quot;&lt;script&gt;&quot;).prop({async:!0,charset:e.scriptCharset,src:e.url}).on(&quot;load error&quot;,n=function(e){t.remove(),n=null,e&amp;&amp;i(&quot;error&quot;===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&amp;&amp;n()}}}});var hn=[],dn=/(=)\?(?=&amp;|$)|\?\?/;x.ajaxSetup({jsonp:&quot;callback&quot;,jsonpCallback:function(){var e=hn.pop()||x.expando+&quot;_&quot;+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter(&quot;json jsonp&quot;,function(t,n,r){var i,o,s,a=t.jsonp!==!1&amp;&amp;(dn.test(t.url)?&quot;url&quot;:&quot;string&quot;==typeof t.data&amp;&amp;!(t.contentType||&quot;&quot;).indexOf(&quot;application/x-www-form-urlencoded&quot;)&amp;&amp;dn.test(t.data)&amp;&amp;&quot;data&quot;);return a||&quot;jsonp&quot;===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,&quot;$1&quot;+i):t.jsonp!==!1&amp;&amp;(t.url+=(Vt.test(t.url)?&quot;&amp;&quot;:&quot;?&quot;)+t.jsonp+&quot;=&quot;+i),t.converters[&quot;script json&quot;]=function(){return s||x.error(i+&quot; was not called&quot;),s[0]},t.dataTypes[0]=&quot;json&quot;,o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&amp;&amp;(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&amp;&amp;x.isFunction(o)&amp;&amp;o(s[0]),s=o=undefined}),&quot;script&quot;):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&amp;&amp;x(e).on(&quot;unload&quot;,function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&amp;&amp;&quot;withCredentials&quot;in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&amp;&amp;!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&amp;&amp;s.overrideMimeType&amp;&amp;s.overrideMimeType(e.mimeType),e.crossDomain||n[&quot;X-Requested-With&quot;]||(n[&quot;X-Requested-With&quot;]=&quot;XMLHttpRequest&quot;);for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&amp;&amp;(delete vn[o],t=s.onload=s.onerror=null,&quot;abort&quot;===e?s.abort():&quot;error&quot;===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,&quot;string&quot;==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t(&quot;error&quot;),t=vn[o=yn++]=t(&quot;abort&quot;),s.send(e.hasContent&amp;&amp;e.data||null)},abort:function(){t&amp;&amp;t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp(&quot;^(?:([+-])=|)(&quot;+b+&quot;)([a-z%]*)$&quot;,&quot;i&quot;),Cn=/queueHooks$/,kn=[An],Nn={&quot;*&quot;:[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&amp;&amp;i[3]||(x.cssNumber[e]?&quot;&quot;:&quot;px&quot;),s=(x.cssNumber[e]||&quot;px&quot;!==o&amp;&amp;+r)&amp;&amp;Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&amp;&amp;s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||&quot;.5&quot;,s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&amp;&amp;1!==a&amp;&amp;--u)}return i&amp;&amp;(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn[&quot;*&quot;]),o=0,s=i.length;for(;s&gt;o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u&gt;s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1&gt;o&amp;&amp;u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r&gt;n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s&gt;o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&amp;&amp;l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&amp;&amp;(i=o[1],o=e[n]=o[0]),n!==r&amp;&amp;(e[r]=o,delete e[n]),s=x.cssHooks[r],s&amp;&amp;&quot;expand&quot;in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=[&quot;*&quot;]):e=e.split(&quot; &quot;);var n,r=0,i=e.length;for(;i&gt;r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&amp;&amp;Lt(e),h=H.get(e,&quot;fxshow&quot;);n.queue||(a=x._queueHooks(e,&quot;fx&quot;),null==a.unqueued&amp;&amp;(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,&quot;fx&quot;).length||a.empty.fire()})})),1===e.nodeType&amp;&amp;(&quot;height&quot;in t||&quot;width&quot;in t)&amp;&amp;(n.overflow=[p.overflow,p.overflowX,p.overflowY],&quot;inline&quot;===x.css(e,&quot;display&quot;)&amp;&amp;&quot;none&quot;===x.css(e,&quot;float&quot;)&amp;&amp;(p.display=&quot;inline-block&quot;)),n.overflow&amp;&amp;(p.overflow=&quot;hidden&quot;,l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||&quot;toggle&quot;===i,i===(f?&quot;hide&quot;:&quot;show&quot;)){if(&quot;show&quot;!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&amp;&amp;h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?&quot;hidden&quot;in h&amp;&amp;(f=h.hidden):h=H.access(e,&quot;fxshow&quot;,{}),o&amp;&amp;(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;H.remove(e,&quot;fxshow&quot;);for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&amp;&amp;(s.end=s.start,s.start=&quot;width&quot;===r||&quot;height&quot;===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||&quot;swing&quot;,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?&quot;&quot;:&quot;px&quot;)},cur:function(){var e=Ln.propHooks[this.prop];return e&amp;&amp;e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&amp;&amp;this.options.step.call(this.elem,this.now,this),n&amp;&amp;n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&amp;&amp;null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,&quot;&quot;),t&amp;&amp;&quot;auto&quot;!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&amp;&amp;(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&amp;&amp;e.elem.parentNode&amp;&amp;(e.elem[e.prop]=e.now)}},x.each([&quot;toggle&quot;,&quot;show&quot;,&quot;hide&quot;],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||&quot;boolean&quot;==typeof e?n.apply(this,arguments):this.animate(Hn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css(&quot;opacity&quot;,0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||H.get(this,&quot;finish&quot;))&amp;&amp;t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return&quot;string&quot;!=typeof e&amp;&amp;(n=t,t=e,e=undefined),t&amp;&amp;e!==!1&amp;&amp;this.queue(e||&quot;fx&quot;,[]),this.each(function(){var t=!0,i=null!=e&amp;&amp;e+&quot;queueHooks&quot;,o=x.timers,s=H.get(this);if(i)s[i]&amp;&amp;s[i].stop&amp;&amp;r(s[i]);else for(i in s)s[i]&amp;&amp;s[i].stop&amp;&amp;Cn.test(i)&amp;&amp;r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&amp;&amp;o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&amp;&amp;x.dequeue(this,e)})},finish:function(e){return e!==!1&amp;&amp;(e=e||&quot;fx&quot;),this.each(function(){var t,n=H.get(this),r=n[e+&quot;queue&quot;],i=n[e+&quot;queueHooks&quot;],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&amp;&amp;i.stop&amp;&amp;i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&amp;&amp;o[t].queue===e&amp;&amp;(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s&gt;t;t++)r[t]&amp;&amp;r[t].finish&amp;&amp;r[t].finish.call(this);delete n.finish})}});function Hn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4&gt;i;i+=2-t)n=jt[i],r[&quot;margin&quot;+n]=r[&quot;padding&quot;+n]=e;return t&amp;&amp;(r.opacity=r.width=e),r}x.each({slideDown:Hn(&quot;show&quot;),slideUp:Hn(&quot;hide&quot;),slideToggle:Hn(&quot;toggle&quot;),fadeIn:{opacity:&quot;show&quot;},fadeOut:{opacity:&quot;hide&quot;},fadeToggle:{opacity:&quot;toggle&quot;}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&amp;&amp;&quot;object&quot;==typeof e?x.extend({},e):{complete:n||!n&amp;&amp;t||x.isFunction(e)&amp;&amp;e,duration:e,easing:n&amp;&amp;t||t&amp;&amp;!x.isFunction(t)&amp;&amp;t};return r.duration=x.fx.off?0:&quot;number&quot;==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&amp;&amp;(r.queue=&quot;fx&quot;),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&amp;&amp;r.old.call(this),r.queue&amp;&amp;x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length&gt;n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&amp;&amp;x.timers.push(e)&amp;&amp;x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&amp;&amp;x.expr.filters&amp;&amp;(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&amp;&amp;i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&amp;&amp;(o=i.getBoundingClientRect()),n=qn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,&quot;position&quot;),p=x(e),f={};&quot;static&quot;===c&amp;&amp;(e.style.position=&quot;relative&quot;),a=p.offset(),o=x.css(e,&quot;top&quot;),u=x.css(e,&quot;left&quot;),l=(&quot;absolute&quot;===c||&quot;fixed&quot;===c)&amp;&amp;(o+u).indexOf(&quot;auto&quot;)&gt;-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&amp;&amp;(t=t.call(e,n,a)),null!=t.top&amp;&amp;(f.top=t.top-a.top+s),null!=t.left&amp;&amp;(f.left=t.left-a.left+i),&quot;using&quot;in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return&quot;fixed&quot;===x.css(n,&quot;position&quot;)?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],&quot;html&quot;)||(r=e.offset()),r.top+=x.css(e[0],&quot;borderTopWidth&quot;,!0),r.left+=x.css(e[0],&quot;borderLeftWidth&quot;,!0)),{top:t.top-r.top-x.css(n,&quot;marginTop&quot;,!0),left:t.left-r.left-x.css(n,&quot;marginLeft&quot;,!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&amp;&amp;!x.nodeName(e,&quot;html&quot;)&amp;&amp;&quot;static&quot;===x.css(e,&quot;position&quot;))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:&quot;pageXOffset&quot;,scrollTop:&quot;pageYOffset&quot;},function(t,n){var r=&quot;pageYOffset&quot;===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=qn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function qn(e){return x.isWindow(e)?e:9===e.nodeType&amp;&amp;e.defaultView}x.each({Height:&quot;height&quot;,Width:&quot;width&quot;},function(e,t){x.each({padding:&quot;inner&quot;+e,content:t,&quot;&quot;:&quot;outer&quot;+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&amp;&amp;(n||&quot;boolean&quot;!=typeof r),s=n||(r===!0||i===!0?&quot;margin&quot;:&quot;border&quot;);return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement[&quot;client&quot;+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body[&quot;scroll&quot;+e],i[&quot;scroll&quot;+e],t.body[&quot;offset&quot;+e],i[&quot;offset&quot;+e],i[&quot;client&quot;+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,&quot;object&quot;==typeof module&amp;&amp;module&amp;&amp;&quot;object&quot;==typeof module.exports?module.exports=x:&quot;function&quot;==typeof define&amp;&amp;define.amd&amp;&amp;define(&quot;jquery&quot;,[],function(){return x}),&quot;object&quot;==typeof e&amp;&amp;&quot;object&quot;==typeof e.document&amp;&amp;(e.jQuery=e.$=x)})(window);</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.09339s from github-fe117-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
      </button>
      You can't perform that action at this time.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-8lNGMbHKa/EMfv/nP5eGzB+zQm8mdKkVGUl4ZLZkgoI=" src="https://assets-cdn.github.com/assets/frameworks-f2534631b1ca6bf10c7effe73f9786cc1fb3426f2674a91519497864b6648282.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-jgzaQtqXpiadF/MEMhyGV6NHmMpb1SPYSVkXdTER4OA=" src="https://assets-cdn.github.com/assets/github-8e0cda42da97a6269d17f304321c8657a34798ca5bd523d8495917753111e0e0.js"></script>
      
      
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

