import { beforeEach, describe, expect, it } from 'vitest';
import {
  fetchAllProjects,
  fetchMostRecentProjects,
  Project,
} from '.././projects.services';

describe('Projects services', () => {
  describe('mostRecentProject()', () => {
    let result: Project[] = [];

    beforeEach(() => {
      result = fetchMostRecentProjects();
    });

    it('returns an array of projects', () => {
      expect(Array.isArray(result)).toBe(true);
    });

    it('returns exactly 3 most recent projects', () => {
      expect(result).toHaveLength(3);
    });

    it('returns projects with required properties', () => {
      result.forEach((project) => {
        expect(project).toHaveProperty('id');
        expect(project).toHaveProperty('name');
        expect(project).toHaveProperty('tech');
        expect(project).toHaveProperty('description');
        expect(project).toHaveProperty('imgUrl');
        expect(project).toHaveProperty('git');
        expect(project).toHaveProperty('live');
      });
    });

    it('each project has non-empty tech array', () => {
      result.forEach((project) => {
        expect(Array.isArray(project.tech)).toBe(true);
        expect(project.tech.length).toBeGreaterThan(0);
      });
    });

    it('each project has valid URLs', () => {
      result.forEach((project) => {
        expect(project.git).toMatch(/^https:\/\//);
        expect(project.live).toMatch(/^https:\/\//);
      });
    });

    it('sorted by descending id', () => {
      const id1 = Number(result[0].id);
      const id2 = Number(result[1].id);
      const id3 = Number(result[2].id);

      expect(id1).toBeGreaterThan(id2);
      expect(id1).toBeGreaterThan(id3);

      expect(id2).toBeGreaterThan(id3);
      expect(id2).toBeLessThan(id1);

      expect(id3).toBeLessThan(id1);
      expect(id3).toBeLessThan(id2);
    });
  });

  describe('fetchAllProjects()', () => {
    let result: Project[] = [];

    beforeEach(() => {
      result = fetchAllProjects();
    });

    it('returns an array of projects', () => {
      expect(Array.isArray(result)).toBe(true);
    });

    it('returns more than 3 projects', () => {
      expect(result.length).toBeGreaterThan(3);
    });

    it('returns projects with required properties', () => {
      expect(result.length).toBeGreaterThan(0);
      result.forEach((project) => {
        expect(project).toHaveProperty('id');
        expect(project).toHaveProperty('name');
        expect(project).toHaveProperty('tech');
        expect(project).toHaveProperty('description');
        expect(project).toHaveProperty('imgUrl');
        expect(project).toHaveProperty('git');
        expect(project).toHaveProperty('live');
      });
    });

    it('each project has non-empty tech array', () => {
      expect(result.length).toBeGreaterThan(0);
      result.forEach((project) => {
        expect(Array.isArray(project.tech)).toBe(true);
        expect(project.tech.length).toBeGreaterThan(0);
      });
    });

    it('each project has valid URLs', () => {
      expect(result.length).toBeGreaterThan(0);
      result.forEach((project) => {
        expect(project.git).toMatch(/^https:\/\//);
        expect(project.live).toMatch(/^https:\/\//);
      });
    });

    it('returns no duplicate projects and IDs', () => {
      expect(result.length).toBeGreaterThan(0);
      const ids = result.map((p) => p.id);
      const uniqueIds = new Set(ids);

      expect(ids.length).toBe(uniqueIds.size);
    });

    it('all projects have non-empty names', () => {
      expect(result.length).toBeGreaterThan(0);
      result.forEach((project) => {
        expect(project.name).toBeTruthy();
        expect(project.name.length).toBeGreaterThan(0);
      });
    });

    it('all projects have non-empty descriptions', () => {
      expect(result.length).toBeGreaterThan(0);
      result.forEach((project) => {
        expect(project.description).toBeTruthy();
        expect(project.description.length).toBeGreaterThan(0);
      });
    });

    it('all projects have valid image URLs', () => {
      expect(result.length).toBeGreaterThan(0);
      result.forEach((project) => {
        expect(project.imgUrl).toMatch(/\.(webp|png|jpg|jpeg|gif)$/i);
      });
    });

    it('all tech items are non-empty strings', () => {
      expect(result.length).toBeGreaterThan(0);
      result.forEach((project) => {
        expect(project.tech.length).toBeGreaterThan(0);
        project.tech.forEach((tech) => {
          expect(typeof tech).toBe('string');
          expect(tech.length).toBeGreaterThan(0);
        });
      });
    });

    it('returns more projects than fetchMostRecentProjects()', () => {
      const recentProjects = fetchMostRecentProjects();
      expect(result.length).toBeGreaterThan(recentProjects.length);
    });
  });
});
