// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
getInstruction(
  'mashedPotatoes',
  0,
  step1 => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step1}</li>`;
  },
  error => console.log(error)
);

getInstruction(
  'mashedPotatoes',
  1,
  step2 => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step2}</li>`;
  },
  error => console.log(error)
);

getInstruction(
  'mashedPotatoes',
  2,
  step3 => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step3}</li>`;
  },
  error => console.log(error)
);

getInstruction(
  'mashedPotatoes',
  3,
  step4 => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step4}</li>`;
  },
  error => console.log(error)
);

getInstruction(
  'mashedPotatoes',
  4,
  step5 => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step5}</li>`;
    document.querySelector('#mashedPotatoesImg').removeAttribute('hidden');
  },
  error => console.log(error)
);

// Iteration 1 - using callbacks
getInstruction(
  'mashedPotatoes',
  0,
  step0 => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step0}</li>`;

    getInstruction(
      'mashedPotatoes',
      1,
      step1 => {
        document.querySelector(
          '#mashedPotatoes'
        ).innerHTML += `<li>${step1}</li>`;

        getInstruction(
          'mashedPotatoes',
          2,
          step2 => {
            document.querySelector(
              '#mashedPotatoes'
            ).innerHTML += `<li>${step2}</li>`;

            getInstruction(
              'mashedPotatoes',
              3,
              step3 => {
                document.querySelector(
                  '#mashedPotatoes'
                ).innerHTML += `<li>${step3}</li>`;

                getInstruction(
                  'mashedPotatoes',
                  4,
                  step4 => {
                    document.querySelector(
                      '#mashedPotatoes'
                    ).innerHTML += `<li>${step4}</li>`;
                    document.querySelector(
                      '#mashedPotatoes'
                    ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
                  },
                  error => console.log(error)
                );
              },
              error => console.log(error)
            );
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    );
  },
  error => console.log(error)
);

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then(step0 => {
    document.querySelector('#steak').innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then(step1 => {
    document.querySelector('#steak').innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then(step2 => {
    document.querySelector('#steak').innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then(step3 => {
    document.querySelector('#steak').innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then(step4 => {
    document.querySelector('#steak').innerHTML += `<li>${step4}</li>`;
    document.querySelector('#steak').innerHTML += `<li>Steak is ready!</li>`;

    document.querySelector('#steakImg').removeAttribute('hidden');
  })
  .catch(error => console.log(error));

// Iteration 3 - using async/await for broccoli
async function makeBroccoli() {
  try {
    await obtainInstruction('broccoli', 0);
    document.querySelector(
      '#broccoli'
    ).innerHTML += `<li>Wash broccoli in cold water</li>`;

    await obtainInstruction('broccoli', 1);
    document.querySelector(
      '#broccoli'
    ).innerHTML += `<li>Trim and cut the stalk in half, then finely slice it</li>`;

    await obtainInstruction('broccoli', 2);
    document.querySelector(
      '#broccoli'
    ).innerHTML += `<li>Fill a pot with water, add a pinch of salt and bring to the boil</li>`;

    await obtainInstruction('broccoli', 3);
    document.querySelector(
      '#broccoli'
    ).innerHTML += `<li>Once boiling, carefully lower the broccoli into the water</li>`;

    await obtainInstruction('broccoli', 4);
    document.querySelector(
      '#broccoli'
    ).innerHTML += `<li>Cook for 3 to 4 minutes, or until tender</li>`;

    await obtainInstruction('broccoli', 5);
    document.querySelector(
      '#broccoli'
    ).innerHTML += `<li>Drain, then leave to steam dry for a minute</li>`;

    document.querySelector(
      '#broccoli'
    ).innerHTML += `<li>Broccoli is ready!</li>`;

    // Bonus: Iteration 4 - Display the image
    document.querySelector('#broccoliImg').removeAttribute('hidden');
  } catch (error) {
    console.log(error);
  }
}
makeBroccoli();

// Bonus: Iteration 5 - using Promise.all for Brussels Sprouts
const brusselsSproutsSteps = [0, 1, 2, 3, 4, 5, 6, 7];

Promise.all(
  brusselsSproutsSteps.map(step => obtainInstruction('brusselsSprouts', step))
)
  .then(steps => {
    steps.forEach((instruction, index) => {
      document.querySelector(
        '#brusselsSprouts'
      ).innerHTML += `<li>${instruction}</li>`;
    });
    document.querySelector(
      '#brusselsSprouts'
    ).innerHTML += `<li>Brussels sprouts are ready!</li>`;

    document.querySelector('#brusselsSproutsImg').removeAttribute('hidden');
  })
  .catch(error => console.log(error));
