export type CHARACTER = {
  id: string;
  name: string;
  level: number;
  current_experience: number;
  required_experience: number;
  attribute_points: number;
  skill_points: number;
  character_archetypes: CHARACTER_ARCHETYPE[];
  character_attributes: CHARACTER_ATTRIBUTE[];
  character_status: CHARACTER_STATUS[];
}

type CHARACTER_ARCHETYPE = {
  id: string;
  archetypes: {
    id: string;
    name: string;
    description: string;
  }
}

type CHARACTER_ATTRIBUTE = {
  id: string;
  attribute_name: string;
  attribute_value: number;
  attributes: {
    id: string;
    name: string;
    description: string;
  }
}

type CHARACTER_STATUS = {
  id: string;
  status_value: number;
  status: {
    id: string;
    name: string;
    description: string;
  }
}