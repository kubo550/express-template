import supertest from 'supertest';
import app from '../server'

describe('health-check', () => {

  it('should return 200', async () => {
    const response = await request()

    expect(response.status).toBe(200)
  });

  const request = () => supertest(app).get('/health');
});

describe('home', () => {

  it('should return with a index.html', async () => {
    const response = await request()

    expect(response.text).toContain('<!DOCTYPE html>')
  });

  const request = () => supertest(app).get('/home');
});