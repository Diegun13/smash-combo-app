"use client";
import { useState } from "react";
import ComboWin from "./ComboWin";

interface combos {
  id: string;
  moves: string;
  isTrue: boolean;
  notes: string;
  doesKill: boolean;
  startingPercent: number;
}
export default function ComboNav({ combos }: { combos: Array<combos> }) {
  const [filterMove, SetFilterMove] = useState("all");
  const [filterPercent, SetFilterPercent] = useState("all");

  const [isTrue, setIsTrue] = useState(false);
  const [doesKill, setDoesKIll] = useState(false);

  function handleTrueCheckbox(event: React.ChangeEvent<HTMLInputElement>) {
    setIsTrue(event.target.checked);
  }

  function handleKillCheckbox(event: React.ChangeEvent<HTMLInputElement>) {
    setDoesKIll(event.target.checked);
  }

  function handleFilterMoveChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newValue = event.target.value;
    SetFilterMove(newValue);
  }
  function handleFilterPercentChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    const newValue = event.target.value;
    SetFilterPercent(newValue);
  }

  // we are going through all the combos and getting the frist name of the combos
  // and then we are trying to get all combos that start with the first part

  let filterdMovesCombos: Map<string, Array<combos>> = new Map();
  for (let i = 0; i < combos.length; i++) {
    let moves = combos[i].moves;
    let placeholder: string[] = [];
    let j = 0;
    while (j < moves.length && moves[j] !== "-") {
      placeholder.push(moves[j]);
      j++;
    }
    let namu = placeholder.join("");
    if (!filterdMovesCombos.get(namu)) {
      filterdMovesCombos.set(namu, [combos[i]]);
    } else {
      filterdMovesCombos.get(namu)?.push(combos[i]);
    }
  }

  let filterPercentCombos: Map<number, Array<combos>> = new Map();
  for (let i = 0; i < combos.length; i++) {
    let percent = combos[i].startingPercent;
    if (!filterPercentCombos.get(percent)) {
      filterPercentCombos.set(percent, [combos[i]]);
    } else {
      filterPercentCombos.get(percent)?.push(combos[i]);
    }
  }
  console.log(filterPercentCombos);

  const optionsMoveArray: string[] = Array.from(filterdMovesCombos.keys());
  const optionsPercentArray: number[] = Array.from(filterPercentCombos.keys());

  let displayCombos = filterdMovesCombos.get(filterMove) || combos;
  if (isTrue) {
    displayCombos = displayCombos.filter((combo) => combo.isTrue);
  }
  if (doesKill) {
    displayCombos = displayCombos.filter((combo) => combo.doesKill);
  }
  if (filterPercent !== "all") {
    displayCombos = displayCombos.filter(
      (combo) => combo.startingPercent === Number(filterPercent)
    );
  }

  let listofCombos = displayCombos.map((combo) => {
    return <ComboWin key={combo.id} combos={combo} />;
  });

  return (
    <section>
      <form>
        <label htmlFor="statingMove">Starting Move</label>
        <select
          id="statingMove"
          className="text-black"
          value={filterMove}
          onChange={handleFilterMoveChange}
        >
          <option value="all">all</option>
          {optionsMoveArray.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label htmlFor="Percent">Percent</label>
        <select
          id="Percent"
          className="text-black"
          value={filterPercent}
          onChange={handleFilterPercentChange}
        >
          <option value="all">all</option>
          {optionsPercentArray.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label htmlFor="isTrue">True</label>
        <input
          type="checkbox"
          id="isTrue"
          checked={isTrue}
          onChange={handleTrueCheckbox}
        />
        <label htmlFor="Kills">Kills</label>
        <input
          type="checkbox"
          id="Kills"
          checked={doesKill}
          onChange={handleKillCheckbox}
        />
      </form>
      <button
        type="button"
        onClick={() => {
          SetFilterMove("all");
          SetFilterPercent("all");
          setIsTrue(false);
          setDoesKIll(false);
        }}
      >
        Reset
      </button>
      <div className="flex flex-wrap gap-2 items-center justify-center">
        {displayCombos.length === 0 ? <h1>No Combos Found</h1> : listofCombos}
      </div>
    </section>
  );
}
