declare function doSomethingCritical(): Promise<number>
declare function doSomethingOptional(arg: number): Promise<string>
declare function doSomethingExtraNice(arg: string): Promise<void>
declare function moreCriticalStuff(): void


// Re-do it as async/await,
// please pay attention that we have optional call that can fail but the flow should proceed.


// ................................................................................................
// Existing Code

doSomethingCritical()

  .then((result) =>
    doSomethingOptional(result)
      .then((optionalResult) => doSomethingExtraNice(optionalResult))
      .catch((e) => { }),
  )
  .then(() => moreCriticalStuff())
  .catch((e) => console.error(`Critical failure: ${e.message}`));



// ................................................................................................
// Your solution

try {
  const result = await doSomethingCritical();

  try {
    const optionalResult = await doSomethingOptional(result)
    await doSomethingExtraNice(optionalResult)

  } catch (error) {
    console.error(error)
  }

  await moreCriticalStuff()

} catch (e) {
  console.error(`Critical failure: ${e.message}`))
}


