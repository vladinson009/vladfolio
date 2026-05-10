import { beforeEach, describe, it, expect, vi } from 'vitest';
import {
  Certificate,
  fetchAllCertificates,
  fetchMostRecentCertificates,
} from '../certificates.services';
import {
  testDescendingIdSort,
  testIsArray,
  testNonEmptyStringProperty,
  testRequiredProperties,
  testUniqueIds,
  testValidLength,
} from './shared-service-tests';

vi.mock('../certificates.services.ts', () => ({
  fetchMostRecentCertificates: vi.fn(() => [
    {
      id: '3',
      title: 'Test Certificate',
      imgUrl: '/test.webp',
      credentialsUrl: 'https://example.com',
    },
    {
      id: '2',
      title: 'Test Certificate',
      imgUrl: '/test.webp',
      credentialsUrl: 'https://example.com',
    },
    {
      id: '1',
      title: 'Test Certificate',
      imgUrl: '/test.webp',
      credentialsUrl: 'https://example.com',
    },
  ]),
  fetchAllCertificates: vi.fn(() => [
    {
      id: '4',
      title: 'Test Certificate',
      imgUrl: '/test.webp',
      credentialsUrl: 'https://example.com',
    },
    {
      id: '3',
      title: 'Test Certificate',
      imgUrl: '/test.webp',
      credentialsUrl: 'https://example.com',
    },
    {
      id: '2',
      title: 'Test Certificate',
      imgUrl: '/test.webp',
      credentialsUrl: 'https://example.com',
    },
    {
      id: '1',
      title: 'Test Certificate',
      imgUrl: '/test.webp',
      credentialsUrl: 'https://example.com',
    },
  ]),
}));

describe('Certificates services', () => {
  describe('fetchMostRecentCertificates()', () => {
    let result: Certificate[] = [];

    beforeEach(() => {
      result = fetchMostRecentCertificates();
    });
    testDescendingIdSort(() => result);
    testUniqueIds(() => result);
    testValidLength(() => result, 3);
    testRequiredProperties(
      () => result,
      ['id', 'title', 'imgUrl', 'credentialsUrl'],
    );
    testIsArray(() => result, 'certificates');
    testNonEmptyStringProperty(() => result, 'title');
  });
  describe('fetchAllCertificates()', () => {
    let result: Certificate[] = [];

    beforeEach(() => {
      result = fetchAllCertificates();
    });
    testValidLength(() => result, 4);
    testRequiredProperties(
      () => result,
      ['credentialsUrl', 'id', 'imgUrl', 'title'],
    );
    testUniqueIds(() => result);
    it('each project has valid URLs', () => {
      result.forEach((cert) => {
        expect(cert.credentialsUrl).toMatch(/^https:\/\//);
      });
    });
    testIsArray(() => result, 'certificates');
    testDescendingIdSort(() => result);
    testNonEmptyStringProperty(() => result, 'title');
  });
});
