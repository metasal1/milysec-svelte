<script lang="ts">
  export let name: string;
  export let email: string;
</script>

<main>
  <img src="milysec-transparent.png" alt="Milysec" width="100%"/>
  <h1>Hello {name}!</h1>
  <a href="www.milysec.com">www.milysec.com</a>
  <a href="mailto:{email}">{email}</a><br />
  <a href="tel:+61399571500">(03) 9957 1500</a><br />
  <p>
    We’re a rapidly growing team of IT rockstars. We have one mission: helping
    you make the best IT decisions. We’re here to challenge the way IT works.
    By thinking differently, we support your team with cutting-edge technology
    to make sure you’re in control at all times. We’re all in. A win for you
    is a win for us. More than just your IT guys – we’re a nimble extension of
    your team. Our goal is to see your business learn and grow with us so no
    matter what stage you’re at, we’ll be there to cheer you on every step of
    the way.</p>
    <p>WE WANT TO BE PART OF YOUR STORY
    </p>
  </main>
<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
