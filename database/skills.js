const all_skills = [
    {
        "class_name": "Soldier",
        "class_skills": [
            {
                "name": "Blade Arc",
                "skills": [
                    {"name": "Laceration", "default": false}
                ],
                "default": false
            },
            {
                "name": "Blitz",
                "skills": [
                    {"name": "Blindside", "default": false}
                ],
                "default": false
            },
            {
                "name": "Cadence",
                "skills": [
                    {"name": "Fighting Form", "default": false},
                    {"name": "Deadly Momentum", "default": false}
                ],
                "default": false
            },
            {
                "name": "Forcewave",
                "skills": [
                    {"name": "Rending Force", "default": false},
                    {"name": "Internal Trauma", "default": false}
                ],
                "default": false
            },
            {
                "name": "Overguard",
                "skills": [],
                "default": false
            },
            {
                "name": "War Cry",
                "skills": [
                    {"name": "Break Morale", "default": false}
                ],
                "default": false
            },
            {
                "name": "Decorated Soldier",
                "skills": [],
                "default": false
            },
            {
                "name": "Fighting Spirit",
                "skills": [],
                "default": true
            },
            {
                "name": "Markovian's Advantage",
                "skills": [
                    {"name": "Zolhan's Technique","default": false}
                ],
                "default": false
            },
            {
                "name": "Menhir's Will",
                "skills": [],
                "default": false
            },
            {
                "name": "Military Conditioning",
                "skills": [],
                "default": true
            },
            {
                "name": "Scars of Battle",
                "skills": [],
                "default": true
            },
            {
                "name": "Shield Training",
                "skills": [],
                "default": false
            },
            {
                "name": "Veterancy",
                "skills": [],
                "default": true
            },
            {
                "name": "Counter Strike",
                "skills": [],
                "default": false
            },
            {
                "name": "Menhir's Bulwark",
                "skills": [],
                "default": false
            },
            {
                "name": "Oleron's Rage",
                "skills": [],
                "default": false
            },
            {
                "name": "Field Command",
                "skills": [
                    {"name": "Squad Tactics", "default": true}
                ],
                "default": true
            }
        ]
    },
    {
        "class_name": "Demolitionist",
        "class_skills": [
            {
                "name": "Blackwater Cocktail",
                "skills": [
                    {"name": "Demon Fire", "default": false},
                    {"name": "Agonizing Flames", "default": false}
                ],
                "default": false
            },
            {
                "name": "Canister Bomb",
                "skills": [
                    {"name": "Improved Casing", "default": false}
                ],
                "default": false
            },
            {
                "name": "Fire Strike",
                "skills": [
                    {"name": "Explosive Strike", "default": false},
                    {"name": "Static Strike", "default": false},
                    {"name": "Brimstone", "default": false}
                ],
                "default": false
            },
            {
                "name": "Flashbang",
                "skills": [
                    {"name": "Searing Light", "default": false}
                ],
                "default": false
            },
            {
                "name": "Grenado",
                "skills": [
                    {"name": "High Impact", "default": false},
                    {"name": "Shattering Blast", "default": false}
                ],
                "default": false
            },
            {
                "name": "Mortar Trap",
                "skills": [
                    {"name": "Heavy Ordnance", "default": false},
                    {"name": "The Big One", "default": false}
                ],
                "default": false
            },
            {
                "name": "Stun Jacks",
                "skills": [
                    {"name": "Full Spread", "default": false}
                ],
                "default": false
            },
            {
                "name": "Thermite Mine",
                "skills": [
                    {"name": "Hellfire Mine", "default": false}
                ],
                "default": false
            },
            {
                "name": "Blast Shield",
                "skills": [],
                "default": true
            },
            {
                "name": "Ulzuin's Chosen",
                "skills": [],
                "default": false
            },
            {
                "name": "Flame Touched",
                "skills": [
                    {"name": "Temper", "default": true}
                ],
                "default": true
            },
            {
                "name": "Vindictive Flame",
                "skills": [
                    {"name": "Ulzuin's Wrath", "default": false}
                ],
                "default": true
            }
        ]
    },
    {
        "class_name": "Occultist",
        "class_skills": [
            {
                "name": "Blood of Dreeg",
                "skills": [
                    {"name": "Aspect of the Guardian", "default": true}
                ],
                "default": true
            },
            {
                "name": "Bloody Pox",
                "skills": [
                    {"name": "Wasting", "default": false},
                    {"name": "Black Death", "default": false}
                ],
                "default": false
            },
            {
                "name": "Curse of Frailty",
                "skills": [
                    {"name": "Vulnerability", "default": false}
                ],
                "default": false
            },
            {
                "name": "Doom Bolt",
                "skills": [],
                "default": false
            },
            {
                "name": "Dreeg's Evil Eye",
                "skills": [
                    {"name": "Blood Burst", "default": false},
                    {"name": "Terrifying Gaze", "default": false},
                    {"name": "Vile Eruption", "default": false}
                ],
                "default": false
            },
            {
                "name": "Sigil of Consumption",
                "skills": [
                    {"name": "Destruction", "default": false}
                ],
                "default": false
            },
            {
                "name": "Bonds of Bysmiel",
                "skills": [
                    {"name": "Manipulation", "default": false}
                ],
                "default": false
            },
            {
                "name": "Possession",
                "skills": [],
                "default": false
            },
            {
                "name": "Solael's Witchfire",
                "skills": [
                    {"name": "Second Rite", "default": false}
                ],
                "default": false
            },
            {
                "name": "Summon Familiar",
                "skills": [
                    {"name": "Mend Flesh", "default": false},
                    {"name": "Storm Spirit", "default": false},
                    {"name": "Lightning Strike", "default": false}
                ],
                "default": false
            },
            {
                "name": "Summon Hellhound",
                "skills": [
                    {"name": "Ember Claw", "default": false},
                    {"name": "Hellfire", "default": false},
                    {"name": "Infernal Breath", "default": false}
                ],
                "default": false
            }
        ]
    },
    {
        "class_name": "Nightblade",
        "class_skills": [
            {
                "name": "Amarasta's Blade Burst",
                "skills": [
                    {"name": "Lethal Assault", "default": false}
                ],
                "default": false
            },
            {
                "name": "Blade Barrier",
                "skills": [],
                "default": false
            },
            {
                "name": "Blade Spirit",
                "skills": [],
                "default": false
            },
            {
                "name": "Blade Trap",
                "skills": [
                    {"name": "Devouring Blades", "default": false}
                ],
                "default": false
            },
            {
                "name": "Phantasmal Blades",
                "skills": [
                    {"name": "Heart Seeker", "default": false},
                    {"name": "Nether Edge", "default": false}
                ],
                "default": false
            },
            {
                "name": "Pneumatic Burst",
                "skills": [
                    {"name": "Shadow Dance", "default": true},
                    {"name": "Elemental Awakening", "default": false}
                ],
                "default": true
            },
            {
                "name": "Ring of Steel",
                "skills": [
                    {"name": "Circle of Slaughter", "default": false}
                ],
                "default": false
            },
            {
                "name": "Shadow Strike",
                "skills": [
                    {"name": "Nidalla's Justifiable Ends", "default": false},
                    {"name": "Nightfall", "default": false}
                ],
                "default": false
            },
            {
                "name": "Anatomy of Murder",
                "skills": [],
                "default": false
            },
            {
                "name": "Dual Blades",
                "skills": [
                    {"name": "Belgothian's Shears", "default": false},
                    {"name": "Nidalla's Hidden Hand", "default": false},
                    {"name": "Amarasta's Quick Cut", "default": false},
                    {"name": "Whirling Death", "default": false},
                    {"name": "Execution", "default": false}
                ],
                "default": false
            },
            {
                "name": "Merciless Repertoire",
                "skills": [],
                "default": false
            },
            {
                "name": "Phantasmal Armor",
                "skills": [],
                "default": true
            },
            {
                "name": "Veil of Shadow",
                "skills": [
                    {"name": "Night's Chill", "default": false}
                ],
                "default": true
            }
        ]
    },
    {
        "class_name": "Aranist",
        "class_skills": [
            {
                "name": "Albrecht's Aether Ray",
                "skills": [
                    {"name": "Disintegration", "default": false}
                ],
                "default": false
            },
            {
                "name": "Callidor's Tempest",
                "skills": [
                    {"name": "Inferno", "default": false}
                ],
                "default": false
            },
            {
                "name": "Devastation",
                "skills": [],
                "default": false
            },
            {
                "name": "Maiven's Sphere of Protection",
                "skills": [
                    {"name": "Conversion", "default": true}
                ],
                "default": true
            },
            {
                "name": "Mirror of Ereoctes",
                "skills": [],
                "default": true
            },
            {
                "name": "Nullification",
                "skills": [],
                "default": true
            },
            {
                "name": "Olexra's Flash Freeze",
                "skills": [
                    {"name": "Absolute Zero", "default": false}
                ],
                "default": false
            },
            {
                "name": "Panetti's Replicating Missile",
                "skills": [
                    {"name": "Distortion", "default": false},
                    {"name": "Supercharged", "default": false},
                    {"name": "Proliferation", "default": false}
                ],
                "default": false
            },
            {
                "name": "Trozan's Sky Shard",
                "skills": [
                    {"name": "Frozen Core", "default": false},
                    {"name": "Shattered Star", "default": false}
                ],
                "default": false
            },
            {
                "name": "Arcane Will",
                "skills": [],
                "default": true
            },
            {
                "name": "Fabric of Reality",
                "skills": [],
                "default": false
            },
            {
                "name": "Inner Focus",
                "skills": [],
                "default": true
            },
            {
                "name": "Mental Alacrity",
                "skills": [],
                "default": false
            },
            {
                "name": "Iskandra's Elemental Exchange",
                "skills": [
                    {"name": "Overload", "default": true},
                    {"name": "Elemental Balance", "default": true}
                ],
                "default": false
            },
            {
                "name": "Reckless Power",
                "skills": [],
                "default": false
            },
            {
                "name": "Star Pact",
                "skills": [],
                "default": false
            }
        ]
    },
    {
        "class_name": "Shaman",
        "class_skills": [
            {
                "name": "Brute Force",
                "skills": [
                    {"name": "Feral Hunger", "default": false},
                    {"name": "Upheaval", "default": false}
                ],
                "default": false
            },
            {
                "name": "Devouring Swarm",
                "skills": [],
                "default": false
            },
            {
                "name": "Grasping Vines",
                "skills": [
                    {"name": "Entangling Vines", "default": false}
                ],
                "default": false
            },
            {
                "name": "Primal Strike",
                "skills": [
                    {"name": "Torrent", "default": false},
                    {"name": "Storm Surge", "default": false}
                ],
                "default": false
            },
            {
                "name": "Savagery",
                "skills": [
                    {"name": "Tenacity of the Boar", "default": false},
                    {"name": "Storm Touched", "default": false}
                ],
                "default": false
            },
            {
                "name": "Mogdrogen's Pact",
                "skills": [
                    {"name": "Heart of the Wild", "default": true},
                    {"name": "Oak Skin", "default": false}
                ],
                "default": true
            },
            {
                "name": "Primal Bond",
                "skills": [],
                "default": false
            },
            {
                "name": "Stormcaller's Pact",
                "skills": [],
                "default": false
            },
            {
                "name": "Conjure Primal Spirit",
                "skills": [],
                "default": false
            },
            {
                "name": "Storm Totem",
                "skills": [],
                "default": false
            },
            {
                "name": "Summon Briarthorn",
                "skills": [
                    {"name": "Ground Slam", "default": false},
                    {"name": "Emboldening Presence", "default": false}
                ],
                "default": false
            },
            {
                "name": "Wendigo Totem",
                "skills": [
                    {"name": "Blood Pact", "default": false}
                ],
                "default": false
            },
            {
                "name": "Wind Devil",
                "skills": [
                    {"name": "Raging Tempest", "default": false},
                    {"name": "Maelstrom", "default": false}
                ],
                "default": false
            }
        ]
    },
    {
        "class_name": "Inquisitor",
        "class_skills": [
            {
                "name": "Flames of Ignaffar",
                "skills": [
                    {"name": "Intensify", "default": false},
                    {"name": "Infernal Purge", "default": false},
                    {"name": "Endless Flame", "default": false}
                ],
                "default": false
            },
            {
                "name": "Horn of Gandarr",
                "skills": [],
                "default": false
            },
            {
                "name": "Inquisitor Seal",
                "skills": [
                    {"name": "Arcane Empowerment", "default": true}
                ],
                "default": true
            },
            {
                "name": "Rune of Hagarrad",
                "skills": [
                    {"name": "Biting Cold", "default": false},
                    {"name": "Chillsurge", "default": false}
                ],
                "default": false
            },
            {
                "name": "Rune of Kalastor",
                "skills": [
                    {"name": "Ignition", "default": false}
                ],
                "default": false
            },
            {
                "name": "Storm Box of Elgoloth",
                "skills": [
                    {"name": "Lightning Tether", "default": false}
                ],
                "default": false
            },
            {
                "name": "Word of Pain",
                "skills": [
                    {"name": "Word of Agony", "default": false},
                    {"name": "Death Sentence", "default": false}
                ],
                "default": false
            },
            {
                "name": "Word of Renewal",
                "skills": [
                    {"name": "Vigor", "default": true},
                    {"name": "Steel Resolve", "default": true}
                ],
                "default": true
            },
            {
                "name": "Artifact Handling",
                "skills": [],
                "default": false
            },
            {
                "name": "Deadly Aim",
                "skills": [],
                "default": true
            },
            {
                "name": "Ranged Expertise",
                "skills": [
                    {"name": "Bursting Round","default": false},
                    {"name": "Chilling Rounds", "default": false},
                    {"name": "Storm Spread", "default": false}
                ],
                "default": false
            },
            {
                "name": "Aura of Censure",
                "skills": [],
                "default": false
            },
            {
                "name": "Aura of Conviction",
                "skills": [],
                "default": false
            }
        ]
    },
    {
        "class_name": "Necromancer",
        "class_skills": [
            {
                "name": "Bone Harvest",
                "skills": [
                    {"name": "Dread", "default": false},
                    {"name": "Soul Harvest", "default": false}
                ],
                "default": false
            },
            {
                "name": "Call of the Grave",
                "skills": [],
                "default": true
            },
            {
                "name": "Drain Essence",
                "skills": [
                    {"name": "Hungering Reach", "default": false},
                    {"name": "Decomposition", "default": false}
                ],
                "default": false
            },
            {
                "name": "Ill Omen",
                "skills": [],
                "default": false
            },
            {
                "name": "Mark of Torment",
                "skills": [],
                "default": true
            },
            {
                "name": "Ravenous Earth",
                "skills": [
                    {"name": "Decay", "default": false},
                    {"name": "Foul Eruption", "default": false}
                ],
                "default": false
            },
            {
                "name": "Reap Spirit",
                "skills": [],
                "default": false
            },
            {
                "name": "Siphon Souls",
                "skills": [
                    {"name": "Blood Boil", "default": false}
                ],
                "default": false
            },
            {
                "name": "Necrotic Edge",
                "skills": [],
                "default": false
            },
            {
                "name": "Reaping Strike",
                "skills": [],
                "default": false
            },
            {
                "name": "Harbinger of Souls",
                "skills": [],
                "default": false
            },
            {
                "name": "Master of Death",
                "skills": [],
                "default": false
            },
            {
                "name": "Spectral Binding",
                "skills": [
                    {"name": "Spectral Wrath", "default": false}
                ],
                "default": true
            },
            {
                "name": "Raise Skeletons",
                "skills": [
                    {"name": "Undead Legion", "default": false},
                    {"name": "Will of the Crypt", "default": false}
                ],
                "default": false
            },
            {
                "name": "Reap Spirit",
                "skills": [],
                "default": false
            },
            {
                "name": "Summon Blight Fiend",
                "skills": [
                    {"name": "Rotting Fumes", "default": false},
                    {"name": "Blight Burst", "default": false}
                ],
                "default": false
            }
        ]
    },
    {
        "class_name": "Oathkeeper",
        "class_skills": [
            {
                "name": "Aegis of Menhir",
                "skills": [
                    {"name": "Avenging Shield", "default": false},
                    {"name": "Reprisal", "default": false}
                ],
                "default": false
            },
            {
                "name": "Ascension",
                "skills": [
                    {"name": "Clarity of Purpose", "default": true}
                ],
                "default": true
            },
            {
                "name": "Eye of Reckoning",
                "skills": [
                    {"name": "Soulfire", "default": false}
                ],
                "default": false
            },
            {
                "name": "Judgment",
                "skills": [
                    {"name": "Crushing Verdict", "default": false},
                    {"name": "Heart of Wrath", "default": false}
                ],
                "default": false
            },
            {
                "name": "Righteous Fervor",
                "skills": [
                    {"name": "Consecration", "default": false},
                    {"name": "Retribution", "default": false}
                ],
                "default": false
            },
            {
                "name": "Vire's Might",
                "skills": [
                    {"name": "Volcanic Stride", "default": false},
                    {"name": "Tectonic Shift", "default": false}
                ],
                "default": false
            },
            {
                "name": "Resilience",
                "skills": [],
                "default": true
            },
            {
                "name": "Safeguard",
                "skills": [],
                "default": false
            },
            {
                "name": "Shattering Smash",
                "skills": [],
                "default": false
            },
            {
                "name": "Smite",
                "skills": [],
                "default": false
            },
            {
                "name": "Divine Mandate",
                "skills": [],
                "default": false
            },
            {
                "name": "Path of the Three",
                "skills": [],
                "default": false
            },
            {
                "name": "Presence of Virtue",
                "skills": [
                    {"name": "Haven", "default": true},
                    {"name": "Rebuke", "default": false}
                ],
                "default": true
            },
            {
                "name": "Summon Guardian of Empyrion",
                "skills": [
                    {"name": "Celestial Presence", "default": false}
                ],
                "default": false
            }
        ]
    }
]


function get_skills_for_class(class_name) {
    for (let i = 0; i < all_skills.length; i++) {
        if (all_skills[i].class_name === class_name) {
            return all_skills[i].class_skills;
        }
    }
}
