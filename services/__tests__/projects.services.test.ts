import { beforeEach, describe, expect, it } from 'vitest';
import {
  fetchAllProjects,
  fetchMostRecentProjects,
  Project,
} from '.././projects.services';
import {
  testDescendingIdSort,
  testIsArray,
  testNonEmptyStringProperty,
  testRequiredProperties,
  testUniqueIds,
  testValidLength,
} from './shared-service-tests';

describe('Projects services', () => {
  describe('mostRecentProject()', () => {
    let result: Project[] = [];

    beforeEach(() => {
      result = fetchMostRecentProjects();
    });

    testIsArray(() => result, 'projects');
    testValidLength(() => result, 3);
    testRequiredProperties(
      () => result,
      ['id', 'name', 'tech', 'description', 'imgUrl', 'git', 'live'],
    );
    testDescendingIdSort(() => result);
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
  });

  describe('fetchAllProjects()', () => {
    let result: Project[] = [];

    beforeEach(() => {
      result = fetchAllProjects();
    });
    testIsArray(() => result, 'projects');

    testValidLength(() => result, 4);
    testRequiredProperties(
      () => result,
      ['id', 'name', 'tech', 'description', 'imgUrl', 'git', 'live'],
    );
    testUniqueIds(() => result);

    testNonEmptyStringProperty(() => result, 'name');
    testNonEmptyStringProperty(() => result, 'description');
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
